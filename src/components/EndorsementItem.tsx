import React from "react";

type props = {
  count: string;
  text: string;
  styles?: string;
};

const EndorsementItem = ({ count = "", text = "", styles = "" }: props) => {
  return (
    <div className={`py-5 flex flex-col items-start justify-center ${styles}`}>
      <h3 className="text-white font-semibold text-2xl md:text-3xl 2xl:text-4.5xl">
        {count}
        <span className="text-yellow-200">+</span>
      </h3>
      <p className="text-grey-300 text-sm font-normal leading-relaxed 2xl:text-lg">
        {text}
      </p>
    </div>
  );
};

export default EndorsementItem;
