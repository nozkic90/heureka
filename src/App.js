import React, { Component } from 'react';
import './App.css';
import { api } from "./index.js";
import AppBar from "./Components/Layout/AppBar";
import SideBarMenu from './Components/SideBarMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      offers: [],
      details: []
    };
  };

  componentDidMount() {
    api.getCategories().then(categories => {
      this.setState({ categories: categories });
      api.getProducts().then(products => {
        this.setState({ products: products });
        api.getOffers().then(offers => {
          console.log()
          this.setState({ offers: offers });
          this.initOffers();
        });
      });
    });
  };

  initOffers() {
    var detail = [];
    this.state.products.forEach(prod => {
      var min = 99999, max = 0;
      var offers = this.state.offers.filter(o => o.productId === prod.productId);
      console.log(offers);
      offers.forEach(o => {
        min = min < o.price ? min : o.price;
        max = max > o.price ? max : o.price;
      });
      var desc = (offers.find(v => v.description !== null));
      var img = (offers.find(v => v.img_url !== null));
      var temp = {
        prodId: prod.productId,
        title: prod.title,
        desc: desc.description,
        img: img !== undefined ? img.img_url : null,
        cost: min.toString() + " - " + max.toString(),
        offers: offers
      };
      detail.push(temp);
    });
    this.setState({ details: detail });
  }

  render() {
    return (
      <React.Fragment>
        <AppBar />
        {this.state.products && this.state.categories && this.state.details ? 
          <SideBarMenu categories={this.state.categories} products={this.state.products} details={this.state.details} />
        :
        null  
        }
      </React.Fragment>
    );
  }
}

export default App;
