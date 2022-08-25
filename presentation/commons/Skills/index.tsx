import config from "@config/config.json";
import S from "./index.module.scss";

export const Skills = () => (
  <div className={S.skills}>
    <div className={S.wrapper}>
      <h2>Experienced in following technologies</h2>
      <div className={S.skillsList}>
        {config.skills.map((skill) => (
          <div key={skill.name} className={S.skill}>
            <div className={S.skillImage}>
              {/*<Image*/}
              {/*  src={skill.imageURL}*/}
              {/*  layout={"fill"}*/}
              {/*  objectFit={"contain"}*/}
              {/*  objectPosition={"bottom"}*/}
              {/*  priority={false}*/}
              {/*  alt={skill.name}*/}
              {/*/>*/}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
