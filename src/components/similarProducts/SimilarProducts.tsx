import { useState } from "react";
import productsData from "../../data/productsData";
import useDataFetch from "../../hooks/useGetData";
import ProductCard from "../productCard/ProductCard";
import style from "./index.module.scss";
const SimilarProducts = () => {
  const { data, loading, error } = useDataFetch(
    `https://vault.jirlie.com/api/method/vault.api.product_filter?`
  );
  const [productsCountToView, setProductsCountToView] = useState(5);
  const similarProducts = data.data ? data.data : [];
  const displayableData = [...similarProducts].splice(0, productsCountToView);
  const addMore = () => {
    setProductsCountToView((prev: number) => prev + 10);
  };
  return (
    <div className={style.moreProducts}>
      <h3>
        Similar <span>Products</span>
      </h3>
      {displayableData &&
        displayableData.map((item, i) => <ProductCard data={item} key={i} />)}
      {productsCountToView <= similarProducts.length ? (
        <div className={style.buttonContainer}>
          <div className="buttonDark" onClick={addMore}>
            Load more products ...
          </div>
        </div>
      ) : (
        <span className="allCaughtUp">You are All caught Up</span>
      )}
    </div>
  );
};

export default SimilarProducts;
