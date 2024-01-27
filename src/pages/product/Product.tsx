import { useNavigate, useParams } from "react-router-dom";
import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import SimilarProducts from "../../components/similarProducts/SimilarProducts";
import useDataFetch from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import TitleFilters from "../../components/titleFilters/TitleFilters";
const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const filters = params.filters ? params.filters : "";
  const { data, loading, error } = useDataFetch(
    `https://vault.jirlie.com/api/method/vault.api.product_filter?item_code=${params.id}`
  );
  const allProducts = useDataFetch(
    `https://vault.jirlie.com/api/method/vault.api.product_filter?${filters}`
  );

  const product = !loading && data ? data?.data[0] : null;

  return (
    <>
      <Navbar />
      <div className={style.container}>
        {/* {allProducts && <TitleFilters data={allProducts.data} />} */}
        {product ? (
          <HeroProductCard data={product} />
        ) : (
          <div> product not avialable </div>
        )}
        {/* <SimilarProducts /> */}
      </div>

      <Footer />
    </>
  );
};

export default transition(Product);
