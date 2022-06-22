import { FC } from "react";
import S from "./index.module.scss";
import { MainPageProps } from "./types";
import { Greeting } from "@presentation/commons/Greeting";
import { Skills } from "@presentation/commons/Skills";

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={S.MainPage}>
      <Greeting />
      <Skills />
    </div>
  );
};
