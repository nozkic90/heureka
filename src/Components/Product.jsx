import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";
import "./Product.css";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import notFound from './../notFound.png';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidUpdate() {}

  render() {
    var prods = this.props.products.filter(p => p.categoryId === parseInt(this.props.id));
    var details = this.props.details;
    return (
      <React.Fragment>
        {prods.map(function(item, id) {
          var detail = details.find(d => d.prodId === item.productId);
          //console.log("test", detail);
          return (
            <Paper className={"paper"}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={"image"}>
                    <img className={"img"} alt={item.title} src={detail.img === null ? notFound : detail.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs={12} style={{ overflow: "hidden", textOverflow: "clip" }}>
                      <Typography gutterBottom variant="subtitle1">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom style={{ height: "130px" }}>
                        {detail.desc}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3} container>
                  <Grid xs={12} style={{ fontWeight: "bold" }}>
                    {detail.cost} Kč
                  </Grid>
                  <Grid xs={12} item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      <HashRouter>
                        <Button style={{ marginRight: "10px", backgroundColor: "chartreuse"}}>
                          <NavLink style={{ textDecoration: "none"}} to={"/detail/" + item.productId}>Porovnat ceny</NavLink>
                          </Button>
                      </HashRouter>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Product;