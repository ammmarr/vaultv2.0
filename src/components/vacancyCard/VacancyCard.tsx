import getDateInCostumeFormat from "../../utils/getDateInCustomFormat";
import style from "./index.module.scss";
const VacancyCard = ({ job_title, creation, short_description }) => {
	const formattedDate = getDateInCostumeFormat(creation);
	console.log(formattedDate);
	return (
		<div className={style.vacancyCard}>
			<h2>{job_title}</h2>
			{short_description && <p>{short_description}</p>}
			<div className={style.buttonContainer}>
				<button type="button" className="buttonDark">
					Interested
				</button>
			</div>
			{formattedDate && <span>Date: {formattedDate}</span>}
		</div>
	);
};

export default VacancyCard;
