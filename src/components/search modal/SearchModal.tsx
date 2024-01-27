import React, { useState } from "react";
import style from "./index.module.scss";
import { To, useNavigate } from "react-router-dom";
interface SearchModal {
  modalOpen: boolean;
  setModalOpen: Function;
  data: any;
}
const SearchModal: React.FC<SearchModal> = ({
  modalOpen,
  setModalOpen,
  data,
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [currentIndex, setCurentIndex] = useState<number>(4);

  const searchData = data?.data ? data.data : [];
  const handleSearch = (event: { target: { value: string } }) => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);

    // Filter products based on input text
    const filtered = searchData.filter((product: any) =>
      Object.values(product).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchText)
      )
    );

    setFilteredProducts(filtered);
  };
  const navigate = useNavigate();
  const navigateTo = (url: string) => {
    navigate(url);
  };
  const displayFilteredProducts = [...filteredProducts]
    .splice(0, currentIndex)
    .map((product) => (
      <div
        className={style.resultCard}
        onClick={() => navigateTo(`/product/${product.item_code}`)}
      >
        {product.item_name}
      </div>
    ));

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalOpen(false);
    document.body.style.overflow = "visible";
  };
  return (
    <div
      className={`${style.container} ${
        modalOpen ? style.opened : style.closed
      }`}
      onClick={(e) => closeModal(e)}
    >
      <div className={style.childContianerUsedForScrolling}>
        <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search Products"
            className={modalOpen ? style.opened : style.closed}
          />
          {searchText.length > 0 && (
            <div className={style.results}>
              {displayFilteredProducts}
              {filteredProducts.length === 0 && (
                <div className={style.noResults}>No Results</div>
              )}
              {filteredProducts.length > 0 &&
              currentIndex < filteredProducts.length ? (
                <div
                  className={style.loadMore}
                  onClick={() => setCurentIndex((prev) => prev + 4)}
                >
                  <button className="button">Load more</button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
