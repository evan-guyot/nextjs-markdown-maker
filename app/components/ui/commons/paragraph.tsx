import React from "react";

const Paragraph = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  const baseClass = "text-lg leading-8 text-gray-600 dark:text-gray-300";
  return <p className={`${baseClass} ${className || ""}`}>{children}</p>;
};

export default Paragraph;
