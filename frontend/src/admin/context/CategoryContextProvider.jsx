/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "./store";
import { getCategory } from "../api/api";

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const res = await getCategory();
    setCategories(res.data.data);
  };

  return (
    <CategoryContext.Provider value={{ categories, fetchCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
