import { FC } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
interface ImagesAndTextCards {
  data?: any;
  direction: "left" | "right";
  color?: string;
}

const ImagesAndTextCardRounded: FC<ImagesAndTextCards> = ({
  direction,
  data,
}) => {
  const width = window.innerWidth;
  let displayedDirection = direction.slice();

  if (width < 830) {
    displayedDirection = "left";
  }
  return (
    <div className={style.wrapperr}>
      {displayedDirection == "left" && (
        <div className={style.imageContainer}>
          <img src={data.img} />
        </div>
      )}

      <div
        className={style.textContainer}
        // style={{ background: data.backgroundColor }}
      >
        <h2>{data.title}</h2>
        {data.content}
        {/* <p>{data.shortDescription}</p> */}
        {/* <Link className="button" to={"/products"}>
          <span>Learn more</span>
        </Link> */}
      </div>
      {displayedDirection == "right" && (
        <div className={style.imageContainer}>
          <img src={data.img} />
        </div>
      )}
    </div>
  );
};

export default ImagesAndTextCardRounded;
