import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import path from "node:path";

const options = parseArgs(process.argv.slice(2));
const rootDir = path.resolve(options.dir);
const supportedInput = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const limitBytes = options.limitKb * 1024;

if (!existsSync(rootDir)) {
  console.error(`No existe el directorio: ${relative(rootDir)}`);
  process.exit(1);
}

if (!hasMagick()) {
  console.error("ImageMagick no esta instalado. Instala con: brew install imagemagick");
  process.exit(1);
}

const images = walk(rootDir).filter((file) =>
  supportedInput.has(path.extname(file).toLowerCase()),
);
const candidates = images
  .map((file) => ({ file, size: statSync(file).size }))
  .filter((item) => item.size >= limitBytes);

if (options.check) {
  printCheck(candidates);
  process.exit(0);
}

let optimized = 0;
let converted = 0;
let skipped = 0;
let savedBytes = 0;

for (const { file, size } of candidates) {
  const ext = path.extname(file).toLowerCase();
  const outputFile = ext === ".webp" ? file : `${file.slice(0, -ext.length)}.webp`;
  const tempFile = ext === ".webp" ? `${file}.tmp.webp` : `${outputFile}.tmp`;

  const result = spawnSync(
    "magick",
    [
      file,
      "-resize",
      `${options.maxWidth}x${options.maxHeight}>`,
      "-strip",
      "-quality",
      String(options.quality),
      tempFile,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    skipped += 1;
    cleanupTemp(tempFile);
    continue;
  }

  const newSize = statSync(tempFile).size;

  if (newSize >= size && ext === ".webp") {
    skipped += 1;
    cleanupTemp(tempFile);
    console.log(`Sin mejora: ${relative(file)} (${formatBytes(size)} -> ${formatBytes(newSize)})`);
    continue;
  }

  renameSync(tempFile, outputFile);

  if (ext === ".webp") {
    optimized += 1;
    savedBytes += Math.max(size - newSize, 0);
    console.log(`Optimizada: ${relative(file)} (${formatBytes(size)} -> ${formatBytes(newSize)})`);
    continue;
  }

  converted += 1;
  console.log(`Convertida: ${relative(file)} -> ${relative(outputFile)} (${formatBytes(size)} -> ${formatBytes(newSize)})`);

  if (options.replaceOriginals) {
    rmSync(file);
    savedBytes += Math.max(size - newSize, 0);
    console.log(`Original eliminado: ${relative(file)}`);
  }
}

console.log("");
console.log(`Listo. Optimizadas: ${optimized}. Convertidas: ${converted}. Omitidas: ${skipped}.`);
console.log(`Ahorro directo estimado: ${formatBytes(savedBytes)}.`);

if (converted > 0 && !options.replaceOriginals) {
  console.log("Nota: las PNG/JPG convertidas se conservaron junto al original. Actualiza referencias antes de borrar originales.");
}

function parseArgs(args) {
  const parsed = {
    check: false,
    dir: "public/images",
    limitKb: 500,
    maxWidth: 1920,
    maxHeight: 1920,
    quality: 75,
    replaceOriginals: false,
  };

  for (const arg of args) {
    if (arg === "--check") parsed.check = true;
    else if (arg === "--replace-originals") parsed.replaceOriginals = true;
    else if (arg.startsWith("--dir=")) parsed.dir = arg.slice("--dir=".length);
    else if (arg.startsWith("--limit-kb=")) parsed.limitKb = Number(arg.slice("--limit-kb=".length));
    else if (arg.startsWith("--max-width=")) parsed.maxWidth = Number(arg.slice("--max-width=".length));
    else if (arg.startsWith("--max-height=")) parsed.maxHeight = Number(arg.slice("--max-height=".length));
    else if (arg.startsWith("--quality=")) parsed.quality = Number(arg.slice("--quality=".length));
  }

  validateNumber("limit-kb", parsed.limitKb);
  validateNumber("max-width", parsed.maxWidth);
  validateNumber("max-height", parsed.maxHeight);
  validateNumber("quality", parsed.quality);

  return parsed;
}

function validateNumber(name, value) {
  if (!Number.isFinite(value) || value <= 0) {
    console.error(`Opcion invalida --${name}: debe ser un numero mayor a 0.`);
    process.exit(1);
  }
}

function hasMagick() {
  try {
    execFileSync("magick", ["-version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.isFile()) files.push(fullPath);
  }

  return files;
}

function printCheck(candidates) {
  if (candidates.length === 0) {
    console.log(`No hay imagenes mayores o iguales a ${options.limitKb} KB en ${relative(rootDir)}.`);
    return;
  }

  console.log(`Imagenes mayores o iguales a ${options.limitKb} KB en ${relative(rootDir)}:`);
  for (const { file, size } of candidates.sort((a, b) => b.size - a.size)) {
    console.log(`${formatBytes(size).padStart(9)}  ${relative(file)}`);
  }
  console.log("");
  console.log(`Total: ${candidates.length} imagenes.`);
}

function cleanupTemp(file) {
  try {
    rmSync(file);
  } catch {}
}

function relative(file) {
  return path.relative(process.cwd(), file);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
