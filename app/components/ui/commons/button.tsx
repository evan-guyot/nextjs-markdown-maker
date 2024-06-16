import React from "react";
import Link from "next/link";

const Button = ({
  href,
  variant,
  className,
  onClick,
  children,
}: {
  href?: string;
  variant: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const baseClass = "font-medium";

  const variantClass = {
    primary:
      "rounded-md bg-primary-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600",
    secondary:
      "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-600",
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={`${baseClass} ${variantClass[variant]} ${className}`}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
