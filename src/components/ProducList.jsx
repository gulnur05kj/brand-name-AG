import React from "react";
import ProducItem from "./ProducItem";

export const ProducList = ({ products = [] }) => {
  return (
    <ul>
      {products?.map((item) => (
        <ProducItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ProducList;
