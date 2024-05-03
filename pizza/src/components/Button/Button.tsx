import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: 'big' | 'small';
}

export default function Button({
  children,
  className,
  size = "small",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles.button, styles.accent, className, {
        [styles.small]: size === "small",
        [styles.big]: size === "big",
      })}
    >
      {children}
    </button>
  );
}
