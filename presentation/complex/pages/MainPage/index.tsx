import { FC } from "react";
import Image from "next/image";
import S from "./index.module.scss";
import { MainPageProps } from "./types";

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={S.MainPage}>
      <div className={S.avatar}>
        <Image
          src={"/images/roman-shalman-photo.png"}
          layout={"fill"}
          objectFit={"contain"}
          objectPosition={"bottom"}
        />
        <p>Some test text</p>
      </div>
    </div>
  );
};
