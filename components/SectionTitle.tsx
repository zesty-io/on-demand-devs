import React from "react";

interface SectionTitleProps {
  title: string;
  kicker?: string;
  description?: string;
  color?: string;
}

const SectionTitle = ({
  title,
  color,
  kicker,
  description,
}: SectionTitleProps) => {
  return (
    <div className="w-full flex items-center justify-center mt-20 mb-16 flex-col">
      {kicker && (
        <p className="mb-2 uppercase text-main-color font-semibold text-sm tracking-wide">
          {kicker}
        </p>
      )}
      <span className="relative z-10 mb-2">
        <h2
          className={`${
            color ? color : "text-main-text-color"
          } text-2xl md:text-3xl font-extralight relative tracking-wider z-10 uppercase md:text-left text-center`}
        >
          {title}
        </h2>
        <div className="w-[40%] h-[6px] bg-main-color absolute -left-4 bottom-1 z-0"></div>
      </span>
      {description && (
        <p className="text-main-text-color text-center">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
