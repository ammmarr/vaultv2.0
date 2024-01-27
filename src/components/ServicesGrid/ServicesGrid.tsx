import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import ServicesCard from "../ServicesCard/ServicesCard";
import servicesData from "../../data/servicesData";
const data = [...servicesData];
let refactoredData: any = [];
for (let i = 0; i <= servicesData.length; i = i + 2) {
  if (servicesData[i + 1]) {
    refactoredData.push([servicesData[i], servicesData[i + 1]]);
  } else {
    refactoredData.push([servicesData[i]]);
  }
}

const ServicesGrid = () => {
  return (
    <div className={style.container}>
      {refactoredData.length > 0 &&
        refactoredData.map((list: any, i: string) => (
          <div className={style.row} key={i}>
            {list.map((item: any, i: string) => (
              <ServicesCard data={item} key={i} />
            ))}
          </div>
        ))}{" "}
    </div>
  );
};

export default ServicesGrid;
