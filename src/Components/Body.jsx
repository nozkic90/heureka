import React, { Component } from "react";
import {
    Route,
  HashRouter
} from "react-router-dom";
import Product from './Product';
import Detail from './Detail';

class Body extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Route path="/category/:id" component={(props) => <Product id={props.match.params.id} products={this.props.products} details={this.props.details} /> }/>
            <Route path="/detail/:id" component={(props) => <Detail id={props.match.params.id} offers={this.props.details} />} />
          </div>
        </HashRouter>
      );
    }
  }

  export default Body;