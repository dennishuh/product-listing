import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductList from './components/ProductList';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProductList} />
    <Route path="products1" component={ProductList} />
    <Route path="products2" component={ProductList} />
  </Route>
)
