import { createElement } from "react";

export default function Reveal({
  children,
  as: Component = "div",
  className = "",
}) {
  return (
    <div className={className}>
      {children ? createElement(Component, null, children) : null}
    </div>
  );
}
