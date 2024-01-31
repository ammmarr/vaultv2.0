import { useState } from "react";
import useDataFetch from "../../hooks/useGetData";
import extractUniqueValuesByKey from "../../utils/extractValuesByKey";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const ProductsNavbarDropDown = () => {
	const [currentActiveFilter, setCurrentActiveFilter] = useState<string>();
	const rawCategoriesData = useDataFetch(
		"https://vault.jirlie.com/api/method/vault.api.all_item_groups",
	);
	const navigate = useNavigate();
	const rawCategoriesObjects = rawCategoriesData?.data
		? rawCategoriesData?.data
		: [];
	const extracted = extractUniqueValuesByKey(
		rawCategoriesObjects,
		"parent_item_group",
	);
	const subFilters = rawCategoriesObjects.filter(
		(cat: any) => cat.parent_item_group === currentActiveFilter,
	);
	const navigateToPage = (url: string) => {
		navigate(url);
		document.body.style.overflow = "visible";
	};
	return (
		<div className={style.container}>
			<div className={style.mainCategoryFilters}>
				{extracted.map((cat: any) => (
					<button
						className={`
            ${currentActiveFilter === cat ? "button" : "buttonDark"} ${
							style.mobButton
						}`}
						style={{ margin: "10px 0" }}
						onClick={() => setCurrentActiveFilter(cat)}
					>
						{cat}
					</button>
				))}
			</div>
			<div className={style.subCategoryFilters}>
				<div
					className={style.subFiltersContainer}
					style={
						currentActiveFilter
							? { maxHeight: "1000px", overflow: "visible" }
							: { maxHeight: "0px", overflow: "hidden" }
					}
				>
					{subFilters.map((cat: any) => (
						<button
							className={`
                ${currentActiveFilter === cat ? "button" : "buttonDark"}
                 ${style.mobButton}`}
							onClick={() =>
								navigateToPage(
									`/products/custom_parent_group=${currentActiveFilter}&item_group=${cat.name}`,
								)
							}
						>
							{cat.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsNavbarDropDown;
