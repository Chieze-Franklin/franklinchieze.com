import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
// import Achievements from "./Sections/Achievements.js";
// import Description from "./Sections/Description.js";
// import Links from "./Sections/Links.js";
// import Roles from "./Sections/Roles.js";
// import ScreenShots from "./Sections/ScreenShots.js";
// import StatesLineGraph from "./Sections/StatesLineGraph.js";
// import Tools from "./Sections/Tools.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const getDurationOfActiveDevelopment = (tool) => {
  return 5;
};

const tool = {
  icon: require("assets/img/faces/avatar.jpg"),
  title: "React",
};

export default function ToolView(props) {
  const classes = useStyles();
  const {expanded} = props;

  tool.durationOfActiveDevelopment = getDurationOfActiveDevelopment(tool);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.subtitle}>
              <img
                src={tool.icon}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                width={18}
              />{" "}
              {tool.title}
            </div>
            {tool.durationOfActiveDevelopment > 1 && (
              <>
                <small>
                  {tool.durationOfActiveDevelopment} months of active
                  development
                </small>{" "}
                <br />
              </>
            )}
            <small>put rating here</small>
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            {/* <Roles project={project} {...props} />
            <ScreenShots project={project} {...props} />
            <Description project={project} {...props} />
            <Achievements project={project} {...props} />
            <Links project={project} {...props} />
            <StatesLineGraph project={project} {...props} />
            <Tools project={project} {...props} /> */}
            {!expanded && (
              <div>
                <Link to="/tools/abc">
                  <Button color="info" size="sm">
                    {"More >>"}
                  </Button>
                </Link>
              </div>
            )}
            <div>
              <br />
              <br />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
