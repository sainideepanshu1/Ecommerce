import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import axios from "axios";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "men",
    new_price: "",
    old_price: "",
  });
  const inputHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const addProduct = async () => {
    console.log(productDetails);
    let resData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      resData = uploadResponse.data;

      if (resData.success) {
        product.image = resData.image_url;

        const addProductResponse = await axios.post(
          "http://localhost:4000/products/add",
          product,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (addProductResponse.data.success) {
          alert("Product Added");
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          name="name"
          value={productDetails.name}
          onChange={inputHandler}
          type="text"
          placeholder="Type Here..."
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={inputHandler}
            type="text"
            name="old_price"
            placeholder="Type Here..."
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={inputHandler}
            type="text"
            name="new_price"
            placeholder="Type Here..."
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={inputHandler}
          name="category"
          className="addproduct-selector"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={addProduct} className="addproduct-button">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
