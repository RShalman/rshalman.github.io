import config from '@config/config.json';
import { Button } from '@presentation/commons/Button/index';
import { Header } from '@presentation/commons/Header/index';
import { SocialIcon } from '@presentation/commons/SocialIcon/index';
import { alphaAngleInRectTriangleInDegs } from '@utils/commons';
import { useWindowSize } from '@utils/hooks/use-window-width';
import { useMemo } from 'react';
import S from './index.module.scss';

export const Socials = () => {
  const { width, height } = useWindowSize();
  const buttonRotationAngle = useMemo(
    () => alphaAngleInRectTriangleInDegs(height, width),
    [height, width]
  );

  const rotationStyles = useMemo(
    () => ({ transform: `rotate(${-buttonRotationAngle}deg)` }),
    [buttonRotationAngle]
  );

  const counterRotationStyles = useMemo(
    () => ({ transform: `rotate(${buttonRotationAngle}deg)` }),
    [buttonRotationAngle]
  );

  return (
    <section className={S.socials}>
      <div className={S.wrapper}>
        <Header title={'Contacts'} className={S.header} />
        <div className={S.text}>
          <p>Feel free to find me in socials or</p>
        </div>
        <div className={S.buttonWrapper} style={rotationStyles}>
          <a href={config.socials.mailAction}>
            <Button text={'Contact me'} />
          </a>
        </div>
        <div className={S.icons} style={rotationStyles}>
          {config.socials.icons.map(({ name, href, imgPath }) => (
            <div
              style={counterRotationStyles}
              key={name}
              className={S.iconWrapper}
            >
              <SocialIcon
                name={name}
                href={href}
                imgPath={imgPath}
                className={S.icon}
                isBgWhite={width > 960}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
