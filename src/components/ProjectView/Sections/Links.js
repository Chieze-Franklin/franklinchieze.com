import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";

export default function Links(props) {
  const {expanded, project} = props;

  if (project.links.length === 0) {
    return null;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        {project.links.map((link, index) => {
          if (!expanded && index > 2) {
            return null;
          }

          return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge color="info">
                <u>{link.title}</u>
              </Badge>
            </a>
          );
        })}
      </GridItem>
    </GridContainer>
  );
}
