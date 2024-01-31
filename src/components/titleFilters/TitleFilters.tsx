import { useNavigate, useParams } from "react-router-dom";
import parseQueryString from "../../utils/parseQueryString";
import style from "./index.module.scss";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const TitleFilters = () => {
	const navigate = useNavigate();
	const params = useParams();

	const parsedFilters = parseQueryString(params.filters);
	const custom_parent_group = parsedFilters?.custom_parent_group;

	const child_item_group = parsedFilters?.item_group;
	return (
		<h2 className={style.titleFilter}>
			<span onClick={() => navigate(`/products`)}>Products </span>{" "}
			{custom_parent_group && (
				<>
					{"> "}
					<span
						onClick={() =>
							navigate(`/products/custom_parent_group=${custom_parent_group}`)
						}
					>
						{custom_parent_group}{" "}
					</span>
				</>
			)}
			{child_item_group && (
				<>
					{"> "}
					<span>{child_item_group}</span>{" "}
				</>
			)}
		</h2>
	);
};

export default TitleFilters;
