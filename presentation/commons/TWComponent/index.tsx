import { IFunction } from '@types/commons';
import { classNames } from '@utils/commons';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

import S from './index.module.scss';

export const TWComponent = ({
  text,
  cb = () => {},
  cursorClassName,
}: {
  text: string;
  cb?: IFunction;
  cursorClassName?: string;
}) => {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  return (
    <div className={classNames(S.tw, isTypingComplete ? S.complete : '')}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .start()
            .callFunction(() => setIsTypingComplete(true))
            .callFunction(cb);
        }}
        options={{ cursorClassName: cursorClassName ?? S.cursor }}
      />
    </div>
  );
};
