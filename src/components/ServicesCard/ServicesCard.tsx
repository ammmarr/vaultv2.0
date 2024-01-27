import style from "./index.module.scss";
import demo from "../../assets/backgroundImages/sound.jpg";
const ServicesCard = ({ data }: any) => {
  return (
    <div className={style.container}>
      <img src={data.img} className={style.cardImg} />
      <div className={style.fade} />
      <div className={style.descContainer}>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
