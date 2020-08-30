import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Achievements(props) {
  const classes = useStyles();
  const { expanded, project } = props;

  if (!expanded) {
    return null;
  }

  return (
    <p className={classes.textLeft}>
      <ul>
        {project.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </p>
  );
}
