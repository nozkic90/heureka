import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./AppBar.css";

export default function ButtonAppBar() {
  return (
    <div className={"appbar"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={"appbar_title"}>
            Malá Heureka
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}