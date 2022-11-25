import config from '@config/config.json';
import { Header } from '@presentation/commons/Header/index';
import { useShowOnIntersection } from '@presentation/providers/IntersectionProvider/hooks/use-show-on-intersection';
import { useRef } from 'react';

import S from './index.module.scss';

const bannerWidth = 500;

export const WorkplacesBanner = () => {
  const workplacesBannerRef = useRef(null);
  const isShow = useShowOnIntersection(workplacesBannerRef);

  const { workplaces } = config ?? {};

  return (
    <section ref={workplacesBannerRef} className={S.workplacesBanner}>
      {isShow && (
        <Header
          title={"Companies I've worked at"}
          className={S.header}
          withTypeWriter
        />
      )}
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
    </section>
  );
};
