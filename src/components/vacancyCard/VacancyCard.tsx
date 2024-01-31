import style from "./index.module.scss";
const VacancyCard = () => {
	return (
		<div className={style.vacancyCard}>
			<h2>Position</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
				consequuntur quidem iure eveniet deserunt accusamus voluptas rerum eius,
				cupiditate repellendus optio velit nostrum blanditiis totam saepe quas
				facilis nam laudantium.
			</p>
			<div className={style.buttonContainer}>
				<button type="button" className="buttonDark">
					Interested
				</button>
			</div>
			<span>Date: 11/11/2011</span>
		</div>
	);
};

export default VacancyCard;
