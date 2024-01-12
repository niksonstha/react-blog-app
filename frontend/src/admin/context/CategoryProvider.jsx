/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "./context";

export const CategoryProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);

  const setCategories = (category) => {
    setCategoriesList(category);
  };

  return (
    <CategoryContext.Provider value={{ categoriesList, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
