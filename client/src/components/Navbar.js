import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

// import { Link } from "react-router-dom";
// import useButton from "../utils/useButton";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Home button"
          >
            <Link to="/">
            <HomeIcon color="secondary"/>
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Confecciones Rimba
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <IconButton color="inherit" aria-label="Avaible Button">
            <Link to="/ropa">
              <ShoppingBasketIcon color="secondary"/>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

// <AppBar position="sticky" color="secondary">
//   <Toolbar className="nav-container">
//     <Fragment>
//       <Link to="/">
//         <useButton tip="Inicio">
//           <HomeIcon color="secondary" />
//         </useButton>
//       </Link>
//       <Link to="/ropa">
//         <useButton tip="Ropa">
//           <WidgetsIcon color="secondary" />
//         </useButton>
//       </Link>
//     </Fragment>
//   </Toolbar>
// </AppBar>

// añadir paleta de colores por el momento inherit
