import React, { ReactNode } from "react";

interface CustomSectionProps {
  className?: string;
  children?: ReactNode;
}

const CustomSection: React.FC<CustomSectionProps> = ({
  className = "",
  children,
}) => {
  return (
    <section
      className={`${className} max-w-[2560px] w-full flex px-4 md:px-12.5`}
    >
      {children}
    </section>
  );
};

export default CustomSection;
