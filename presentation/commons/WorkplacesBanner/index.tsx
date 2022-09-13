import config from '@config/config.json';
import { Header } from '@presentation/commons/Header/index';

import S from './index.module.scss';

const bannerWidth = 500;

export const WorkplacesBanner = () => {
  const { workplaces } = config ?? {};

  return (
    <div className={S.workplacesBanner}>
      <Header title={"Places I've worked at"} className={S.header} />
      <div
        className={S.carousel}
        style={{
          width: `${bannerWidth * (workplaces?.length * 2)}px`,
          animationDuration: `${workplaces?.length * 10}s`,
        }}
      >
        {[...workplaces, ...workplaces].map(({ name, imagePath }, idx) => (
          <div
            key={`${name}_${idx}`}
            className={S.workplace}
            style={{ width: bannerWidth }}
          >
            <img src={imagePath} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};
