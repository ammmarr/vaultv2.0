import React, { Suspense } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./index.module.scss";

export interface ProductCardProps {
	data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const {
		item_name,
		short_description,
		longDescription,
		name,
		thumbnail,
		website_image,
		brand,
		item_group,
	} = data;
	const navigate = useNavigate();
	const params = useParams();
	const filters = params.filters;
	return (
		<>
			<div
				className={style.container}
				onClick={() => navigate(`/${filters}/product/${data.item_code}`)}
			>
				<div className={style.imageContainer}>
					<Suspense
						fallback={
							<div style={{ width: "100%", height: "100%", background: "red" }}>
								sssssss
							</div>
						}
					>
						<img src={`${import.meta.env.VITE_DOMAIN}${website_image}`} />
					</Suspense>
				</div>
				<div className={style.textSection}>
					<h1 className={style.h1}>{data.item_name}</h1>
					{/* <p className={style.p}>Brand: {brand}</p>
          <p className={style.p}>Group: {item_group}</p> */}
					<p className={style.p}>{short_description}</p>
					<div className={style.buttonContainer}>
						<button className="button" style={{ fontSize: "10px" }}>
							More details
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
