"use client";

import Link from "next/link";
import { ReactNode } from "react";

export type IBtnVariant = "pink" | "dark" | "white" | "ghost" | "yellow";

interface IconButtonProps {
  children: ReactNode;
  icon?: string; // kept for compatibility, ignored
  variant?: IBtnVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function IconButton({
  children,
  variant = "pink",
  href,
  onClick,
  className = "",
  type = "button",
  disabled,
  target,
  rel,
}: IconButtonProps) {
  const base =
    variant === "ghost" ? "btn-ghost"
    : variant === "white" ? "btn-light"
    : variant === "yellow" ? "btn-yellow"
    : "btn-primary";
  const cls = className ? `${base} ${className}` : base;

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
