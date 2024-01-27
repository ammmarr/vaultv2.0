import aboutUsData from "../../data/aboutusData/aboutUsData";
import ImagesAndTextCardRounded from "./imagesAndTextCard/ImagesAndTextCardRounded";
import style from "./index.module.scss";

const ImagesAndText = () => {
  const data = [...aboutUsData];
  const featuredData = data.slice(0, 3);

  return (
    <div className={style.container}>
      {data.map((each: any, i: number) => (
        <ImagesAndTextCardRounded
          direction={i % 2 ? "left" : "right"}
          data={data[i]}
          key={i}
        />
      ))}

      {/* <div className={style.buttonContainer}>
        <div className="button">
          <span>More ...</span>
        </div>
      </div> */}
    </div>
  );
};

export default ImagesAndText;
