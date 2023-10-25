import React from "react";
import Image from "next/image";
import logoLight from "../public/assets/logo-light.png";

const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full bg-dark min-h-[25vh] py-8 md:px-20 lg:px-[10%] px-6 flex md:items-center justify-center flex-col">
      <Image
        className="w-[120px] md:w-[150px] mb-6"
        src={logoLight}
        alt="Logo"
      />

      <div className="w-full border-t-[1px] border-[#32353b] pt-8 flex items-center md:flex-row justify-between text-main-text-color text-sm flex-col">
        <p>
          © {date.getFullYear()} On-Demand Developers. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
