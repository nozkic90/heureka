import React, { Component } from "react";
import {
    Route,
  HashRouter
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Detail.css";
import notFound from './../notFound.png'; 

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: 3
    }
  };

  parseUrl(url) {
    var start = url.indexOf("://");
    var end = url.indexOf(".cz");
    return url.substring(start + 3, end);
  };

  handleShowMore = () => {
    var temp = this.state.showItems;
    this.setState({ showItems: temp + 3 }); 
  };

    render() {
      var detail = this.props.offers.find(v => v.prodId === parseInt(this.props.id));
      detail.offers.sort(function(a, b) {
        return a.price - b.price;
      });
      return (
        <React.Fragment>
            <Grid container direction="row" style={{ width: "120%", height: "250px"}}>
                <Grid item xs={3} >
                  <img className={"img"} alt={detail.title} src={detail.img === null ? notFound : detail.img} />
                </Grid>
                <Grid item xs={9}>
                  <Grid container direction="column">
                    <Grid item xs={12} style={{ fontWeight: "bold" }}>
                      {detail.title}
                    </Grid>
                    <Grid item xs={11}>
                      {detail.desc}
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" style={{ width: "120%", height: "200px"}}>
                <Grid item xs={3} className={"comparePrices"}>
                  Porovnání cen
                </Grid>
                <Grid item xs={9} />
                <Grid item xs={11}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableBody>
                        {detail.offers.slice(0, this.state.showItems).map((offer, id) => (
                          <TableRow key={id}>
                            <TableCell component="th" scope="row">
                              <a href={offer.url} target="_blank">{this.parseUrl(offer.url)}</a>
                            </TableCell>
                            <TableCell align="right"><Button className={"buyButtons"}>Koupit</Button></TableCell>
                            <TableCell align="right">{offer.price} Kč</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {
                    this.state.showItems < detail.offers.length ? 
                    <Button className={"buyButtons"} onClick={this.handleShowMore}>Načti další</Button>
                    : null
                  }
                </Grid>

            </Grid>
        </React.Fragment>
      );
    }
  }

  export default Detail;