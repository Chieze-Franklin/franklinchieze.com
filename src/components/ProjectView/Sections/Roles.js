import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Roles(props) {
  const classes = useStyles();
  const {expanded, project} = props;

  return (
    <div className={classes.subtitle}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          {project.roles.map((role, index) => {
            if (!expanded && index > 2) {
              return null;
            }

            return <Badge key={role}>{role}</Badge>;
          })}
        </GridItem>
      </GridContainer>
    </div>
  );
}
