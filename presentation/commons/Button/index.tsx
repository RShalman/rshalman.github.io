import { classNames } from '@utils/commons';
import { IButton } from './index.d';

import S from './index.module.scss';

export const Button = ({ text, onCLick = () => {}, className }: IButton) => (
  <button
    className={classNames(S.button, className)}
    onClick={onCLick}
    role="button"
    tabIndex={0}
    aria-pressed="false"
  >
    {text}
  </button>
);
