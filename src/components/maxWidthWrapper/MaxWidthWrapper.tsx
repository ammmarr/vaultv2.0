import style from "./index.module.scss";
const MaxWidthWrapper = ({ children }: any) => {
  return <div className={style.container}>{children}</div>;
};

export default MaxWidthWrapper;
