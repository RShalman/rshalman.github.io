import { classNames } from '@utils/commons';
import { useCallback, useState } from 'react';
import Typewriter from 'typewriter-effect';

import S from './index.module.scss';

export const Greeting = () => {
  const [isHelloWorldComplete, setIsHelloWorldComplete] =
    useState<boolean>(false);

  const TWComponent = useCallback(
    ({
      text,
      cb = () => {},
      cursorClassName,
    }: {
      text: string;
      cb?: (...args) => unknown;
      cursorClassName?: string;
    }) => (
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).start().callFunction(cb);
        }}
        options={{ cursorClassName }}
      />
    ),
    []
  );

  return (
    <div className={S.greetings}>
      <div className={S.avatar}>
        <img src="/images/roman-shalman-photo.png" alt="Roman Shalman Photo" />
      </div>
      <div className={S.greetingsText}>
        <div
          className={classNames(
            S.greeting,
            isHelloWorldComplete ? S.complete : ''
          )}
        >
          <TWComponent
            text={'Hello World!'}
            cb={() => setIsHelloWorldComplete(true)}
            cursorClassName={S.helloWorldCursor}
          />
        </div>
        <div className={S.intro}>
          {isHelloWorldComplete && (
            <TWComponent
              text={
                "I'm Roman Shalman - Software Engineer with general focus on Frontend"
              }
              cursorClassName={S.helloWorldCursor}
            />
          )}
        </div>
      </div>
    </div>
  );
};
