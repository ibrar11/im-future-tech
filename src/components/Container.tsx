import React from "react";
import { tw } from "@/utils/Tw";

type childrenType = {
  children: React.ReactNode;
};

const Container = ({ children }: childrenType) => {
  return (
    <div
      className={tw`2xl:max-w-desktop-containers mx-auto max-w-container px-5`}
    >
      {children}
    </div>
  );
};

export default Container;
