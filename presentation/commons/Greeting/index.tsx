import { TWComponent } from '@presentation/commons/TWComponent';
import { useShowOnIntersection } from '@presentation/providers/IntersectionProvider/hooks/use-show-on-intersection';
import { useRef, useState } from 'react';

import S from './index.module.scss';

export const Greeting = () => {
  const [isHelloWorldComplete, setIsHelloWorldComplete] =
    useState<boolean>(false);

  const grettingRef = useRef(null);
  const isShow = useShowOnIntersection(grettingRef);

  return (
    <div ref={grettingRef} className={S.greetings}>
      <div className={S.avatar}>
        <img src="/images/roman-shalman-photo.png" alt="Roman Shalman Photo" />
      </div>
      {isShow && (
        <div className={S.greetingsText}>
          <div className={S.greeting}>
            <TWComponent
              text={'Hello World!'}
              cb={() => setIsHelloWorldComplete(true)}
            />
          </div>
          <div className={S.intro}>
            {isHelloWorldComplete && (
              <TWComponent
                text={
                  "I'm Roman Shalman - Software Engineer with general focus on Frontend"
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
