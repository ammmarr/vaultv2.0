import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { FC } from "react";
import { ProductCardProps } from "../ProductCard";
import img from "../../../assets/categoryImages/leather.jpg";
// import img from "../../../assets/productsImages/p (0).jpeg";
const ProductCardSquare: FC<ProductCardProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      onClick={() => navigate(`/product/${data.item_code}`)}
    >
      <div className={style.imgContainer}>
        <div className={style.imgWrapper}>
          <img src={`${import.meta.env.VITE_DOMAIN}${data.website_image}`} />
        </div>
      </div>
      <div className={style.textContainer}>
        <h3>{data.item_name}</h3>
        <p>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel
          expedita explicabo qui ducimus laborum repellendus ad consequatur
          officiis odit, sapiente sequi minima quidem! Impedit a porro veritatis
          cupiditate velit. */}
          {data.short_description}
        </p>
        <div className={style.buttonContainer}>
          <Link
            className="button"
            style={{ fontSize: "10px" }}
            to={`/product/${data.item_code}`}
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSquare;
