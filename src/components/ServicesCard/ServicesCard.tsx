import style from "./index.module.scss";
const ServicesCard = ({ data }: any) => {
	return (
		<div className={style.container}>
			<img src={data.img} className={style.cardImg} alt="background" />
			<div className={style.fade} />
			<div className={style.descContainer}>
				<h3>{data.title}</h3>
				<p>{data.desc}</p>
			</div>
		</div>
	);
};

export default ServicesCard;
