import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import collabBrandsData from "../../data/collabBrandsData";
import useWindowSize from "../../hooks/useWindowSize";
import settings from "../../utils/sliderSettings";
import style from "./index.module.scss";
import "./style.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useRef } from "react";

const ColloaboratedBrandsSection = () => {
  const [width, height] = useWindowSize();
  let numberofSlidesToShow = 5;
  if (width < 900) {
    numberofSlidesToShow = 4;
  }
  if (width < 630) {
    numberofSlidesToShow = 1;
  }
  const sliderRef = useRef<Slider | null>(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className={style.container}>
      <div className={style.mainTextSection}>
        <div className={style.arrowContainerR} onClick={goToNextSlide}>
          {" "}
          <KeyboardDoubleArrowRightIcon className="iconBlack" />
        </div>
        <div className={style.arrowContainerL} onClick={goToPrevSlide}>
          <KeyboardDoubleArrowLeftIcon className="iconBlack" />
        </div>

        <Slider
          {...settings}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          lazyLoad="anticipated"
          slidesToShow={numberofSlidesToShow}
          className={style.collaboratedBrandSlider}
          ref={(slider) => (sliderRef.current = slider)}
        >
          {collabBrandsData.map((item: any, i: number) => {
            return (
              <div className={style.sliderItemContainer} key={i}>
                <div className={style.padding}>
                  <img src={item.img} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ColloaboratedBrandsSection;
