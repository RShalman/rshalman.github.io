import { classNames } from '@utils/commons';
import S from './index.module.scss';

import { ISocialIcon } from './index.d';

export const SocialIcon = ({
  name,
  href,
  imgPath,
  isBgWhite = false,
  className,
  dimensions,
}: ISocialIcon) => (
  <div
    style={dimensions && dimensions}
    className={classNames(S.socialIcon, isBgWhite ? S.onWhite : '', className)}
  >
    {href ? (
      <a href={href} target="_blank">
        <div className={S.image}>
          <img src={imgPath} alt={name} />
        </div>
      </a>
    ) : (
      <img src={imgPath} alt={name} />
    )}
  </div>
);
