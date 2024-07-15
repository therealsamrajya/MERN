import React from "react";
import Button from "../Button/Button";

const ReusableDiv = ({ buttonIcon, spanText, divValue }) => {
  return (
    <div className="flex flex-row gap-4 cursor-pointer items-center max-sm:gap-2 max-sm:text-[14px]">
      <Button className="w-8 max-sm:w-[4]" value={buttonIcon} />
      <span>{spanText}</span>
      {divValue !== "0" && (
        <div className="border border-black w-5 ml-auto mr-8 h-6 flex items-center justify-center max-sm:w-5 max-sm:text-[14px]">
          {divValue}
        </div>
      )}
    </div>
  );
};

export default ReusableDiv;
