import { useMemo, useRef, useState } from 'react';

import config from '@config/config.json';
import { Button } from '@presentation/commons/Button/index';
import { Header } from '@presentation/commons/Header/index';
import { SocialIcon } from '@presentation/commons/SocialIcon/index';
import { TWComponent } from '@presentation/commons/TWComponent';
import { useShowOnIntersection } from '@presentation/providers/IntersectionProvider/hooks/use-show-on-intersection';
import { alphaAngleInRectTriangleInDegs } from '@utils/commons';
import { useWindowSize } from '@utils/hooks/use-window-width';

import S from './index.module.scss';

export const Socials = () => {
  const [headerTWComplete, setHeaderTWComplete] = useState<boolean>(false);
  const [textTWComplete, setTextTWComplete] = useState<boolean>(false);
  const socialsRef = useRef(null);
  const isShow = useShowOnIntersection(socialsRef);

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
    <section ref={socialsRef} className={S.socials}>
      <div className={S.wrapper}>
        {isShow && (
          <>
            <Header
              title={'Contacts'}
              className={S.header}
              withTypeWriter
              typeWriterCb={() => setHeaderTWComplete(true)}
            />
            <div className={S.text}>
              {headerTWComplete && (
                <TWComponent
                  text={'Feel free to find me in socials or'}
                  cb={() => setTextTWComplete(true)}
                />
              )}
            </div>
            <div className={S.buttonWrapper} style={rotationStyles}>
              {textTWComplete && (
                <a href={config.socials.mailAction}>
                  <Button text={'Contact me'} className={S.contactMe} />
                </a>
              )}
            </div>
            {textTWComplete && (
              <div className={S.icons} style={rotationStyles}>
                {config.socials.icons.map(({ name, href, imgPath }, idx) => (
                  <div
                    style={{
                      ...counterRotationStyles,
                      animationDelay: `${idx * -0.05}s`,
                    }}
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
            )}
          </>
        )}
        <div className={S.creds}>
          <p
            className={S.credsText}
          >{`Developed & designed by Roman Shalman © ${new Date().getFullYear()}`}</p>
        </div>
      </div>
    </section>
  );
};
