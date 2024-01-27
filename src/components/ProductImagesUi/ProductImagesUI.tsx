import { FC, useState } from "react";
import style from "./index.module.scss";
interface ProductImagesUI {
  image: string;
}
const ProductImagesUI: FC<ProductImagesUI> = ({ image }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={style.productImagesUI}>
      <div className={style.mainImageContainer}>
        <img
          src={`${import.meta.env.VITE_DOMAIN}${image}`}
          className={style.mainImage}
        />
      </div>
      {/* <div className={style.imagesSlider}>
        {images.map((item, key) => (
          <div className={style.smallImagesContainer} key={key}>
            <img
              src={item}
              className={style.smallImage}
              key={key}
              onClick={() => setActiveImg(key)}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProductImagesUI;
