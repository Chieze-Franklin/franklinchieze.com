import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Description(props) {
  const classes = useStyles();
  const { /*expanded, */ project } = props;

  let visibleText = project.description;

  //   if (!expanded) {
  //     if (visibleText.length > 300) {
  //       visibleText = visibleText.substring(0, 297) + "...";
  //     }
  //   }

  return <p className={classes.textLeft}>{visibleText}</p>;
}
