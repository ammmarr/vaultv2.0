import React from "react";
import style from "./index.module.scss";
import extractUniqueValuesByKey from "../../utils/extractValuesByKey";
import { useNavigate } from "react-router-dom";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const TitleFilters = ({ data }: any) => {
  const navigate = useNavigate()
  const handleFilterChange = () => {};
  const parentItemGroupAllValues = data.data
    ? extractUniqueValuesByKey(data.data, "custom_parent_group")
    : [];
  const parent_item_group =
    parentItemGroupAllValues.length === 1 ? parentItemGroupAllValues[0] : "";
  const subItemGroupAllValues = data.data
    ? extractUniqueValuesByKey(data.data, "item_group")
    : [];
  const child_item_group =
    subItemGroupAllValues.length === 1 ? subItemGroupAllValues[0] : "";
  return (
    <h2 className={style.titleFilter}>
      <span onClick={() => navigate(`/products`)}>Products </span>{" "}
      {parent_item_group.length > 0 && (
        <span
          onClick={() =>
            navigate(`/products/custom_parent_group=${parent_item_group}`)
          }
        >
          {">"} {parent_item_group}{" "}
        </span>
      )}
      {child_item_group.length > 0 && (
        <span>
          {">"} {child_item_group}
        </span>
      )}
    </h2>
  );
};

export default TitleFilters;
