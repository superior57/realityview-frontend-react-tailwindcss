import { ReactNode, createElement } from "react";
import classNames from "classnames";

// ----------------------------------------------------------------------
type Props = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "button1"
    | "button2"
    | "caption1"
    | "caption2"
    | "body1"
    | "body2"
    | "normal";
  color?: "primary" | "secondary" | "black" | "white";
  children: ReactNode;
};

const Typography = ({
  variant = "body1",
  color = "primary",
  children,
}: Props) => {
  let tagName = "p";

  switch (variant) {
    case "h1":
      tagName = "h1";
      break;
    case "h2":
      tagName = "h2";
      break;
    case "h3":
      tagName = "h3";
      break;
    case "h4":
      tagName = "h4";
      break;
    case "body1":
      tagName = "p";
      break;
    case "body2":
      tagName = "p";
      break;
    case "button1":
      tagName = "span";
      break;
    case "button2":
      tagName = "span";
      break;
    case "caption1":
      tagName = "p";
      break;
    case "caption2":
      tagName = "p";
      break;
    case "normal":
      tagName = "p";
      break;
    default:
      break;
  }

  const TextTag = ({ ...props }: { className?: string; children: ReactNode }) =>
    createElement(tagName, props, children);

  return (
    <TextTag
      className={classNames({
        // variant
        ["heading1"]: variant === "h1",
        ["heading2"]: variant === "h2",
        ["heading3"]: variant === "h3",
        ["heading4"]: variant === "h4",
        ["body1"]: variant === "body1",
        ["body2"]: variant === "body2",
        ["button1"]: variant === "button1",
        ["button2"]: variant === "button2",
        ["caption1"]: variant === "caption1",
        ["caption2"]: variant === "caption2",
        ["normal"]: variant === "normal",
        // color
        ["text-primary"]: color === "primary",
        ["text-secondary"]: color === "secondary",
        ["text-black"]: color === "black",
        ["text-white"]: color === "white",
      })}
    >
      {children}
    </TextTag>
  );
};

export default Typography;
