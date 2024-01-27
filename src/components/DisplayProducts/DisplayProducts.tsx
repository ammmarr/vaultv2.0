import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCard from "../filterCard/FilterCard";
import ProductCard from "../productCard/ProductCard";
import ProductCardSquare from "../productCard/productCardSquare/ProductCardSquare";
import style from "./index.module.scss";
import CheckboxCollection from "../filterCard/checkboxCollection/CheckboxCollection";
import Footer from "../footer/Footer";

interface DisplayProductsProps {
  data: any;
  onFilterChange: Function;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const { data, onFilterChange } = props;
  const [gridView, setGridView] = useState(true);
  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const displayFilters = location.pathname != "/" ? true : false;
  function handleClick() {
    !displayFilters && navigate("/products");
  }
  const handleSearchInputChange = (e: any) => {
    const searchText = e.target.value.toLowerCase();
    setSearchInput(searchText);

    if (searchInput.length === 0) {
      setProducts([...data]);
      return;
    }
    // Filter products based on input text

    const filtered = [...data].filter((product: any) =>
      product.item_name.toLowerCase().includes(searchText)
    );
    setProducts(filtered);
  };
  const width = window.innerWidth;
  let gridViewDisplay = true;
  useEffect(() => {
    if (width < 855) {
      gridViewDisplay = false;
      setGridView(false);
    }
  }, []);

  const [productsCountToView, setProductsCountToView] = useState(10);
  const displayableData = [...products].splice(0, productsCountToView);
  const addMore = () => {
    setProductsCountToView((prev: number) => prev + 10);
  };
  return (
    <div className={style.container}>
      <div className={style.optionContainer}>
        {/* <div className={style.popUpFilterContainer}>
          {displayFilters && (
            <FilterCard products={data} onFilterChange={onFilterChange} />
          )}
        </div> */}

        <div className={style.searchContainerBigScreen}>
          <input
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          {/* <div className={style.button} onClick={handleClick}>
            Search
          </div> */}
        </div>
        {gridViewDisplay && (
          <div className={style.viewContainer}>
            <div
              className={`${style.iconBg} ${
                gridView ? style.blacked : style.brighted
              }`}
              onClick={() => setGridView(false)}
            >
              <GridViewIcon color="inherit" />
            </div>
            <div
              className={`${style.iconBg} ${
                !gridView ? style.blacked : style.brighted
              }`}
              onClick={() => setGridView(true)}
            >
              <ListIcon color="inherit" />
            </div>
          </div>
        )}
      </div>
      <div className={style.productsAndFixedFilterContainer}>
        {/* <div className={style.fixedFilterContainer}>
          <CheckboxCollection />
        </div> */}
        <div className={style.productsContainer}>
          {gridView
            ? displayableData.map((item: any, i: number) => (
                <ProductCard data={item} key={i} />
              ))
            : displayableData.map((item: any, i: number) => (
                <ProductCardSquare data={item} key={i} />
              ))}
        </div>

        <div className={style.buttonContainer}>
          {productsCountToView <= data.length ? (
            <div className="buttonDark" onClick={addMore}>
              Load more products ...
            </div>
          ) : (
            <span>You are All caught Up</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
