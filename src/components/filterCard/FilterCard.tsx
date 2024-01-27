import Hamburger from "hamburger-react";
import style from "./index.module.scss";
import { useState } from "react";

interface FilterCardProps {
  products: any;
  onFilterChange: Function;
}
function FilterCard({ onFilterChange }: FilterCardProps) {
  const data = [
    { id: 1, brand: ["Adidas", "Nike"] },
    { id: 2, brand: "Puma" },
    { id: 3, category: ["Shoes", "Bags"] },
    { id: 4, brand: ["Adidas", "Puma"] },
  ];

  // try {
  //   const checkboxObjects = generateCheckboxObjects(data, [
  //     "brand",
  //     "category",
  //   ]);
  //   console.log(checkboxObjects, "new");
  // } catch (error) {
  //   console.error(error.message);
  // }
  // Use state to track the selected filters
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className={`${style.container}`}>
      <div className={style.filterAndArrowContainer}>
        <h3>Filters</h3>
        <div className={style.iconContainer}>
          <Hamburger size={16} toggled={filterOpen} toggle={setFilterOpen} />
        </div>
      </div>
      <div
        className={style.checkboxCollection}
        style={filterOpen ? { display: "block" } : { display: "none" }}
      >
        <h4>Brand</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            Mugs
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="brand"
            />
          </label>
          <label>
            Bags
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="brand"
            />
          </label>{" "}
          <label>
            Glasses
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="brand"
            />
          </label>
        </form>
        <h4>Item Group</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            group 1
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="itemGroup"
            />
          </label>
          <label>
            group 2
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="itemGroup"
            />
          </label>{" "}
          <label>
            group 3
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="itemGroup"
            />
          </label>
          <label>
            group 4
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="itemGroup"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default FilterCard;
