import React from "react";
import style from "./index.module.scss";
const CheckboxCollection = () => {
  const onFilterChange = (e: any) => {};
  return (
    <div className={style.checkboxCollection}>
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
  );
};

export default CheckboxCollection;
