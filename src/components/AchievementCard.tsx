import React from "react";
import ArrowUpRight from "../../public/icons/regular/arrows/ArrowUpRight";

interface BenefitsListItemProps {
  icon: React.ReactNode;
  title: string;
  subHeading: string;
  description: string;
  styles?: string;
}

const AchievementCard = (props: BenefitsListItemProps) => {
  const { icon, title, subHeading, description, styles } = props;

  return (
    <div className={`flex items-center justify-between ${styles}`}>
      <div className="flex flex-col relative justify-start py-7 md:py-10 2xl:py-12 gap-y-3 ">
        <span>{icon}</span>
        <div>
          <p className="text-white font-medium text-base md:text-lg 2xl:text-xl">
            {title}
          </p>
          <p className="text-grey-200 text-sm font-normal md:text-base 2xl:text-lg">
            {subHeading}
          </p>
        </div>
        <p className="text-grey-300 text-sm font-normal md:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
      <div className="bg-yellow-200 p-3 w-10 h-10 md:w-11 md:h-11 2xl:w-13 2xl:h-13 rounded-full flex items-center justify-center right-0 top-[40%]">
        <ArrowUpRight color="black" />
      </div>
    </div>
  );
};

export default AchievementCard;
