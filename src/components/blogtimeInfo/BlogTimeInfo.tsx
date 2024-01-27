import React from "react";
import style from "./index.module.scss";
export const BlogTimeInfo = ({ published_on, read_time }: any) => {
  return (
    <div className={style.buttonAndContainer}>
      <span className={style.info}>{published_on}</span>
      <span className={style.info}>
        Read Time: {read_time} {parseInt(read_time) > 2 ? "mins" : "min"}
      </span>
    </div>
  );
};
