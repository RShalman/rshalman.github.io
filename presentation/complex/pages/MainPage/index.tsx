import { FC } from 'react';

import { MainPageProps } from 'presentation/complex/pages/MainPage/types';

import { Greeting } from '@presentation/commons/Greeting';
import { Skills } from '@presentation/commons/Skills';
import { Socials } from '@presentation/commons/Socials';
import { WorkplacesBanner } from '@presentation/commons/WorkplacesBanner';

import S from './index.module.scss';

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={S.MainPage}>
      <Greeting />
      <Skills />
      <WorkplacesBanner />
      <Socials />
    </div>
  );
};
