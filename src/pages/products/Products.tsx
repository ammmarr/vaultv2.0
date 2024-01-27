import { useNavigate, useParams } from "react-router-dom";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import Navbar from "../../components/navbar/NavBar";

import useDataFetch from "../../hooks/useGetData";
import extractUniqueValuesByKey from "../../utils/extractValuesByKey";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import Footer from "../../components/footer/Footer";
import TitleFilters from "../../components/titleFilters/TitleFilters";
interface FilterObject {
  brand: string[];
  itemGroup: string[];
}
const Products = () => {
  const params = useParams();
  const filters = params.filters ? params.filters : "";
  const { data, loading, error } = useDataFetch(
    `https://vault.jirlie.com/api/method/vault.api.product_filter?${filters}`
  );

  const handleFilterChange = () => {};

  return (
    <>
      <div className={style.container}>
        <Navbar theme={"dark"} />
        <div className={style.productsContainerAndFilter}>
          {data.data && <TitleFilters data={data} />}
          {data.data ? (
            <DisplayProducts
              data={data.data}
              onFilterChange={handleFilterChange}
            />
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Products);
