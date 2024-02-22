import React from "react";
import ArrowUpRight from "../../public/icons/regular/arrows/ArrowUpRight";

const TopBanner = () => {
  return (
    <div className="flex gap-x-8 px-2 pt-10 pb-3 sm:py-2 justify-center">
      <p className="text-xs text-grey-300 leading-normal font-normal sm:text-sm 2xl:text-lg">
        Subscribe to our Newsletter For Blogs and Resources
      </p>
      <ArrowUpRight color="#FFD11A" />
    </div>
  );
};

export default TopBanner;
