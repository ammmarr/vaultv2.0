import { useParams } from "react-router-dom";
import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import TitleFilters from "../../components/titleFilters/TitleFilters";
import useDataFetch from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
const Product = () => {
	const params = useParams();
	const { data, loading } = useDataFetch(
		`https://vault.jirlie.com/api/method/vault.api.product_filter?item_code=${params.id}`,
	);

	const product = !loading && data ? data?.data[0] : null;

	return (
		<>
			<Navbar />
			<div className={style.container}>
				<div className="wrapper">
					<TitleFilters />
					{product ? (
						<HeroProductCard data={product} />
					) : (
						<div> product not avialable </div>
					)}
					{/* <SimilarProducts /> */}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default transition(Product);
