import mainCategoriesData from "../../data/mainCategoriesData";
import productsData from "../../data/productsData";
import ImagesAndTextCard from "./imagesAndTextCard/ImagesAndTextCard";
import style from "./index.module.scss";

const ImagesAndText = () => {
  const data = [...mainCategoriesData];
  const featuredData = data.slice(0, 3);
  return (
    <div className={style.container}>
      <ImagesAndTextCard direction="left" data={data[0]} key={1} color="red" />
      <ImagesAndTextCard direction="right" data={data[1]} key={2} />
      <ImagesAndTextCard direction="left" data={data[2]} key={3} />
      {/* <div className={style.buttonContainer}>
        <div className="button">More ...</div>
      </div> */}
    </div>
  );
};

export default ImagesAndText;
