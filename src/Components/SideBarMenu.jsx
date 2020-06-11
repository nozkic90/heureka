import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import Body from './Body';
import Button from "@material-ui/core/Button";
import "./SideBarMenu.css";

class SideBarMenu extends Component {
    render() {
      var categories = this.props.categories;
      console.log(this.props.details);
      return (
        <HashRouter>
          <div className={"sidebar"}>
              {categories.map(function(cat, id) {
                return (
                  <Button className={"buttons"}><NavLink className={"links"} key={id} to={"/category/" + cat.categoryId}>{cat.title}</NavLink></Button>
                );
              })}
          </div>
          <div className={"content"}> 
            <Body categories={categories} products={this.props.products} details={this.props.details} />
          </div>
        </HashRouter>
      );
    }
  }

  export default SideBarMenu;