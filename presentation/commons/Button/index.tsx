import { IButton } from './index.d';

import S from './index.module.scss';

export const Button = ({ text, onCLick = () => {} }: IButton) => (
  <button className={S.button} onClick={onCLick}>
    {text}
  </button>
);
