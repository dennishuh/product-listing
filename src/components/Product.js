import React from 'react';
import '../styles/Product.css';

const Product = ({product}) => {
  const productImg = product.image ? `/images/products/${product.image}` : '/images/product_default.png';
  const price = product.price.toFixed(2);
  return (
    <div className="col-xs-12 col-sm-3">
      <div className="thumbnail">
        <img src={productImg} alt={product.name} />
        <div className="caption">
          <p><strong>{product.name}</strong></p>
          <p>Price.......{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
