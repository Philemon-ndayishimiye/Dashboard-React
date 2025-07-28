import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      name: "MacBook Pro 16",
      category: "laptop",
      date: "Dec 10, 2024",
      status: "In Stock",
    },

    {
      name: "Dell XPS 13",
      category: "laptop",
      date: "Dec 9, 2024",
      status: "In Stock",
    },

    {
      name: "iPhone 15 Pro",
      category: "Mobile",
      date: "Dec 8, 2024",
      status: "low Stock",
      variant: "primary",
    },

    {
      name: "iPad Air",
      category: "Tablet",
      date: "Dec 7, 2024",
      status: "In Stock",
    },

    {
      name: "Surface Pro 9",
      category: "Tablets",
      date: "Dec 7, 2024",
      status: "Out of Stock",
      variant: "secondary",
    },
  ]);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
