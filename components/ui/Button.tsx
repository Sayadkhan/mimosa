import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      auto: "",
      full: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "auto",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
