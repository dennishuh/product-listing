import React from 'react';
import Product from './Product';
import Sidebar from './Sidebar';

const ProductList = ({currentProducts, title, onSortClick}) => {
  const products = currentProducts.map(product => {
    return (
      <Product product={product} key={product.name}/>
    )
  })
  return (
    <div className="product-listings">
      <div className="row flexbox">
        <div className="col-xs-12 col-sm-9">
          <div className="row">
            <h2 className="col-xs-12">{title}</h2>
            {products}
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 sidebar">
          <Sidebar onSortClick={onSortClick}/>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
