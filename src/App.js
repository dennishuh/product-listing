import React, { Component } from 'react';
import _ from 'lodash';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import products from './data/data.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.navClick = this.navClick.bind(this);
    this.onSortClick = this.onSortClick.bind(this);

    const allProducts = this.uniqueArray([...products[0].products, ...products[1].products]);

    this.state = {
      allProducts: allProducts,
      currentProducts: allProducts,
      title: 'All Products'
    }
  }

  componentDidMount() {
    this.checkHeights();

    window.onpopstate = function(e) {
      console.log(window.location.pathname)
      const path = window.location.pathname;
      const pathNum = path !== '/' ? path.slice(-1) - 1 : path;
      this.navClick(pathNum)
    }.bind(this);
  }

  checkHeights() {
    const app = document.getElementById('root');
    const appHeight = app.clientHeight;
    const viewportHeight = window.innerHeight;

    this.isFooterFixed(app, appHeight, viewportHeight);
  }

  isFooterFixed(app, aH, vH) {
    if (aH < vH) {
      app.parentNode.classList.add('container-full-viewport');
    } else {
      app.parentNode.classList.remove('container-full-viewport');
    }
  }

  uniqueArray = (arr) => {
    return (
      _.map(
        _.uniq(
            _.map(arr, function(obj){
                return JSON.stringify(obj);
            })
        ), function(obj) {
            return JSON.parse(obj);
        }
      )
    )
  };

  navClick(el) {
    const prod = (el.dataset && el.dataset.products) || (el === '/' ? 'all' : el);
    let currentProducts;
    let title;

    if (isNaN(prod)) {
      currentProducts = this.state.allProducts;
      title = 'All Products';
    } else {
      currentProducts = products[prod].products;
      title = products[prod].category;
    }

    this.setState({
      currentProducts,
      title
    }, function() {
      this.checkHeights();
    });
  }

  onSortClick(el) {
    const orderBy = el.dataset.filterBy;
    let sortedArr;

    if (orderBy !== 'alpha') {
      sortedArr = this.sortArrayByPrice(this.state.currentProducts, orderBy);

    } else {
      sortedArr = this.sortArrayByName(this.state.currentProducts);

    }

    this.setState({
      currentProducts: sortedArr
    })
  }

  sortArrayByPrice(arr, order) {
    return (
      arr.sort(function(a, b) {
        if (order === 'low') {
          return a.price-b.price;
        } else {
          return b.price-a.price;
        }
      })
    );
  }

  sortArrayByName(arr) {
    return (
      arr.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    );
  }


  render() {
    var childrenWithProps = React.cloneElement(this.props.children, {currentProducts: this.state.currentProducts, title: this.state.title, onSortClick: this.onSortClick});
    return (
      <div>
        <Header />
        <Nav navClick={this.navClick}/>
        {childrenWithProps}
        <Footer />
      </div>
    );
  }
}

export default App;
