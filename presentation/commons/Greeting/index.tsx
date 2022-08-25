import S from "./index.module.scss";

export const Greeting = () => (
  <div className={S.greetings}>
    <div className={S.avatar}>
      {/*<Image*/}
      {/*  src={"/images/roman-shalman-photo.png"}*/}
      {/*  layout={"fill"}*/}
      {/*  objectFit={"contain"}*/}
      {/*  objectPosition={"bottom"}*/}
      {/*/>*/}
    </div>
    <div className={S.greetingsText}>
      <p className={S.greeting}>Hello World!</p>
      <h1 className={S.intro}>
        I'm Roman Shalman - Software Engineer with general focus on Frontend
      </h1>
    </div>
  </div>
);
