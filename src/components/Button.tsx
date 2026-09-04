import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-sm",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#467A8F] hover:bg-[#3D6C7F] text-white shadow-sm shadow-[#467A8F]/20 hover:shadow-md hover:shadow-[#467A8F]/30 border border-[#78A9B8]/30",
    secondary:
      "bg-white hover:bg-[#F2F7F8] text-[#171A1C] border border-[#E5E7E8] shadow-xs hover:border-[#C7DDE3] hover:shadow-sm",
    ghost:
      "bg-transparent hover:bg-[#F2F7F8] text-[#656B70] hover:text-[#171A1C]",
    dark:
      "bg-[#171C1F] hover:bg-[#20272B] text-[#F5F6F4] border border-[#2D4C59] shadow-sm",
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
          {icon && <span className="inline-flex transition-transform group-hover:translate-x-0.5">{icon}</span>}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {icon && <span className="inline-flex transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {icon && <span className="inline-flex transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}
