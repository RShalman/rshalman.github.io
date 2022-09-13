import { classNames } from '@utils/commons';

import { IHeader } from './index.d';
import S from './index.module.scss';

export const Header = ({ title, className }: IHeader) => {
  return <h2 className={classNames(S.Header, className)}>{title}</h2>;
};
