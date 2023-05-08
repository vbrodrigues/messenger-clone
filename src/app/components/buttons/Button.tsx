"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
    flex
    justify-center
    rounded-md
    px-3
    py-2
    text-sm
    font-semibold
    focus-visible: outline
    focus-visible: outline-2
    focus-visible: outline-offset-2
  `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-all",
        danger &&
          "bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition-all",
        !secondary &&
          !danger &&
          "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-sky-500 transition-all"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
