import { TWComponent } from '@presentation/commons/TWComponent';
import { classNames } from '@utils/commons';

import { IHeader } from './index.d';
import S from './index.module.scss';

export const Header = ({
  title,
  className,
  withTypeWriter,
  typeWriterCb,
}: IHeader) => {
  return (
    <h2 className={classNames(S.Header, className)}>
      {withTypeWriter ? <TWComponent text={title} cb={typeWriterCb} /> : title}
    </h2>
  );
};
