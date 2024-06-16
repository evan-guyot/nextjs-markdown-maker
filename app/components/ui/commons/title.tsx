import React from "react";

const Title = ({
  variant,
  className,
  children,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const baseClass = "tracking-tight text-gray-900 dark:text-gray-100";

  const variantClass = {
    h1: "text-3xl sm:text-4xl font-extrabold",
    h2: "text-3xl sm:text-4xl font-bold",
    h3: "text-2xl sm:text-3xl font-bold",
    h4: "text-xl sm:text-2xl font-bold",
    h5: "text-xl sm:text-2xl font-semibold",
    h6: "text-xl sm:text-2xl font-normal",
  };

  return (
    <Tag className={`${baseClass} ${variantClass[variant]} ${className || ""}`}>
      {children}
    </Tag>
  );
};

export default Title;
