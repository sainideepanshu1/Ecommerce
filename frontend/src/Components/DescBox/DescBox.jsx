import React from "react";
import "./DescBox.css";
export const DescBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-desc">
        <p>
          An ecommerce website is an online platform that facilitates buying and
          selling of products or services over the Internet serves as a virtual
          marketplace where businesses and individuals showcase their products,
          interact with customers and conduct transactions without the need of
          for a physical presence. E Commerce websites have gained immense
          popularity due to their conventional accessibility and the global
          reach they offer.
        </p>
        <p>
          E commerce websites typically display products or services along with
          detailed descriptions, images, prices and any una variations. Example
          size is colours. Each product usually has its own dedicated pages with
          relevant information.
        </p>
      </div>
    </div>
  );
};
