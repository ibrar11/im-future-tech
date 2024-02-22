import React from "react";

const Divider = ({ styles = "" }: { styles: string }) => {
  return <div className={`${styles}`}></div>;
};

export default Divider;
