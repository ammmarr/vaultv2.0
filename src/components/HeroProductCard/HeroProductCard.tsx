// import WhatsappButton from "../whatsappButton/WhatsappButton";
import formateStringToJSX from "../../utils/formateStringToJSX";
import ProductImagesUI from "../ProductImagesUi/ProductImagesUI";
import style from "./index.module.scss";
// import Back from "../back Button/Back";
const HeroProductCard = ({ data }: any) => {
	const { item_name, description, name, website_image } = data;

	const content = formateStringToJSX(description);
	return (
		<>
			<div className={style.container}>
				<ProductImagesUI image={website_image} />

				<div className={style.textSection}>
					<div className={style.groupAndBack}>
						<h3 className={style.h3}>{name}</h3>

						{/* <Back /> */}
					</div>

					<h1 className={style.h1}>{item_name}</h1>
					<div className={style.descriptionContainer}>{content}</div>
					<div className={style.buttonContainer}>
						<button type="button" className="buttonDark">
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroProductCard;
