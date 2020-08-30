import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";

export default function Tools(props) {
  const { expanded, project } = props;

  if (project.tools.length === 0) {
    return null;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        {project.tools.map((tool, index) => {
          if (!expanded && index > 2) {
            return null;
          }

          return (
            <Link key={tool.title} to={`/tools/${tool.id}`}>
              <Badge color="primary">
                <u>{tool.title}</u>
              </Badge>
            </Link>
          );
        })}
      </GridItem>
    </GridContainer>
  );
}
