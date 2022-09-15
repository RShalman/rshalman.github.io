import config from '@config/config.json';
import { Header } from '@presentation/commons/Header';

import S from './index.module.scss';

//  TODO: switch all to SVGs
// TODO: accessibility
export const Skills = () => (
  <div className={S.skills}>
    <div className={S.wrapper}>
      <Header title={'Experienced in following technologies'} />
      <div className={S.skillsList}>
        {config.skills.map((skill) => (
          <div key={skill.name} className={S.skill}>
            <div className={S.skillImage}>
              <img src={skill.imageURL} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
