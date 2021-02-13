import React from 'react';

export const Role = (props) => {
  const { role } = props;

  return (
    <div className="mb-4 details-section">
        <h5 className="resume-heading">{role.title}</h5>
        <p>{role.startDate} - {role.endDate} <span className="font-italic">({role.type})</span></p>
        <p>{role.description.split("\n").filter(line => !!line).map(line => <>{line}<br /></>)}</p>

        {role.tools && (
          <>
            <h6 className="font-weight-bold heading-2">Tools</h6>
            <p>
              {role.tools.map(tool => (
                <a href={tool.url} target="_blank" rel="noreferrer">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    width="26"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title={tool.name}
                  />{" "}
                </a>
              ))}
            </p>
          </>
        )}

        {role.projects && (
          <>
            <h6 className="font-weight-bold heading-2">Projects</h6>
            <ul className="list-text mb-md-3">
              {role.projects.map(project => (
                <li>
                  <span className="mr-3"></span>
                  <a href={project.url || "#"}>
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {role.accomplishments && (
          <>
            <h6 className="font-weight-bold heading-2">Accomplishments</h6>
            <ul className="list-text mb-md-3">
              {role.accomplishments.map(accomplishment => (
                <li>
                  <span className="mr-3"></span>
                  {accomplishment}
                </li>
              ))}
            </ul>
          </>
        )}

        {role.recognitions && (
          <>
            <h6 className="font-weight-bold heading-2">Recognitions</h6>
            <ul className="list-text mb-md-3">
              {role.recognitions.map(recognition => (
                <li>
                  <span className="mr-3"></span>
                  <a href={recognition.url || "#"}>
                    {recognition.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  )
}
