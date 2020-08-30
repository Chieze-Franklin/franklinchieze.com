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
import Achievements from "./Sections/Achievements.js";
import Description from "./Sections/Description.js";
import Links from "./Sections/Links.js";
import Roles from "./Sections/Roles.js";
import ScreenShots from "./Sections/ScreenShots.js";
import StatesLineGraph from "./Sections/StatesLineGraph.js";
import Tools from "./Sections/Tools.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const translateProjectState = (state) => {
  switch (state) {
    case "ACTIVE_MAINTENANCE":
      return "I am actively maintaining this project";
    case "COMPLETED":
      return "I have completed this project";
    case "DEVELOPMENT":
      return "I am actively working on this project";
    case "EXITED":
      return "I have exited this project";
    case "PASSIVE_MAINTENANCE":
      return "I am actively maintaining this project";
    default:
      return "";
  }
};

const getCurrentState = (project) => {
  return project.states[project.states.length - 1].state;
};

const getDurationOfActiveDevelopment = (project) => {
  return 5;
};

const statesData = (states) => {
  return [3, 3, 3, 2, 2, 1, 3, 3, 2, 1, 0, 0];
};

const project = {
  achievements: [
    "I think that’s a responsibility that I have, to push possibilities, to" +
      "show people, this is the level that things could be at. I will be the" +
      "leader of a company that ends up being worth billions of dollars, because" +
      "got the answers. I understand culture. I am the nucleus. I think that’s a" +
      "responsibility that I have, to push possibilities, to show people, this is" +
      "the level that things could be at.",
    "I think that’s a responsibility that I have, to push possibilities, to" +
      "show people, this is the level that things could be at. I will be the" +
      "leader of a company that ends up being worth billions of dollars, because" +
      "got the answers. I understand culture. I am the nucleus. I think that’s a" +
      "responsibility that I have, to push possibilities, to show people, this is" +
      "the level that things could be at.",
  ],
  description:
    "I think that’s a responsibility that I have, to push possibilities, to" +
    "show people, this is the level that things could be at. I will be the" +
    "leader of a company that ends up being worth billions of dollars, because" +
    "got the answers. I understand culture. I am the nucleus. I think that’s a" +
    "responsibility that I have, to push possibilities, to show people, this is" +
    "the level that things could be at.",
  icon: require("assets/img/faces/avatar.jpg"),
  links: [
    {
      title: "Cardbud",
      url: "https://cardbud.com/p/1234",
    },
    {
      title: "Twitter Exp",
      url: "https://twitter.com/explore",
    },
    {
      title: "Facebook Exp",
      url: "https://facebook.com",
    },
    {
      title: "Notion App",
      url: "https://www.notion.so",
    },
  ],
  roles: [
    "senior engineer",
    "lead engineer",
    "principal engineer",
    "distinguished engineer",
  ],
  screenshots: [
    require("assets/img/bg.jpg"),
    require("assets/img/bg2.jpg"),
    require("assets/img/bg.jpg"),
    require("assets/img/bg3.jpg"),
  ],
  states: [
    {
      state: "DEVELOPMENT",
      start: 1,
      end: 2,
    },
  ],
  title: "Yutars",
  tools: [
    {
      title: "React",
      id: "1234",
    },
    {
      title: "Redux",
      id: "567",
    },
    {
      title: "GraphQL",
      id: "78",
    },
    {
      title: "NodeJs",
      id: "890",
    },
  ],
};

export default function ProjectView(props) {
  const classes = useStyles();
  const {expanded} = props;

  project.durationOfActiveDevelopment = getDurationOfActiveDevelopment(project);
  project.state = getCurrentState(project);
  project.statesData = statesData(project.states);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.subtitle}>
              <img
                src={project.icon}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                width={18}
              />{" "}
              {project.title}
            </div>
            {project.durationOfActiveDevelopment > 1 && (
              <>
                <small>
                  {project.durationOfActiveDevelopment} months of active
                  development
                </small>{" "}
                <br />
              </>
            )}
            <small>{translateProjectState(project.state)}</small>
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <Roles project={project} {...props} />
            <ScreenShots project={project} {...props} />
            <Description project={project} {...props} />
            <Achievements project={project} {...props} />
            <Links project={project} {...props} />
            <StatesLineGraph project={project} {...props} />
            <Tools project={project} {...props} />
            {!expanded && (
              <div>
                <Link to="/projects/abc">
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
