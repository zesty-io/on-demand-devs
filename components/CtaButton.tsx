import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const CtaButton = ({ children }: ButtonProps) => {
  return (
    <button className="bg-main-color text-white hover:bg-main-color-dark  py-3 px-6 md:py-4 md:px-8 text-base font-semibold rounded transition hero-cta">
      {children}
    </button>
  );
};

export default CtaButton;
