import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
import axios from "axios";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products/all");
      setAllProducts(response.data.products);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const removeProduct = async (id) => {
    if (confirm("are you sure")) {
      try {
        const response = await axios.post(
          "http://localhost:4000/products/remove",
          { id: id }
        );
        if (response.data.success) {
          alert("product removed");
          fetchProducts();
        } else {
          alert("Failed!!!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <div key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                  src={cross_icon}
                  alt=""
                  className="listproduct-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
