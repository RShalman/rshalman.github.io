import config from '@config/config.json';
import { Header } from '@presentation/commons/Header';
import { useShowOnIntersection } from '@presentation/providers/IntersectionProvider/hooks/use-show-on-intersection';
import { useRef } from 'react';

import S from './index.module.scss';

// TODO: router
// TODO: switch all to SVGs
// TODO: accessibility
// TODO: favicon
// TODO: type-errors

export const Skills = () => {
  const skillsRef = useRef(null);
  const isShow = useShowOnIntersection(skillsRef);

  return (
    <div ref={skillsRef} className={S.skills}>
      <div className={S.wrapper}>
        {isShow && (
          <>
            <Header
              title={'Experienced in following technologies'}
              withTypeWriter
            />
            <div className={S.skillsList}>
              {config.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className={S.skill}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className={S.skillImage}>
                    <img src={skill.imageURL} alt={skill.name} />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
