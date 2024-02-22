import React from "react";
import { tw } from "@/utils/Tw";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div
      className={tw`2xl:max-w-desktop-containers mx-auto max-w-container px-5`}
    >
      {children}
    </div>
  );
};

export default Container;
