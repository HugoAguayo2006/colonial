import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    up: { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -22 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 26 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -26 }, show: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } },
    blur: {
      hidden: { opacity: 0, filter: "blur(6px)" },
      show: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const chosen = variants[variant] || variants.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={chosen}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}
