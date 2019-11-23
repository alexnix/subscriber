import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  banckButtonImg: {
    height: "35px",
    "padding-right": "10px",
    "vertical-align": "middle"
  },
  buttonWrapper: {
    display: "inline-block",
    padding: "5px",
    cursor: "pointer",
    "background-color": "white",
    color: "black",
    "vertical-align": "center",
    "margin-right": "5px",
    border: "1px solid #333",
    "align-items": "center"
  }
});

export default function BanckButton({ name, logo, url }) {
  const classes = useStyles();

  return (
    <div
      className={classes.buttonWrapper}
      onClick={e => {
        window.open(url, "_blank");
      }}
    >
      <img className={classes.banckButtonImg} src={logo} alt={name} />
      <span>Login</span>
    </div>
  );
}
