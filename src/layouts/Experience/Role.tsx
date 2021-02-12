import React from 'react';

export const Role = (props) => {

  return (
    <div className="mb-4 details-section">
        <h5 className="resume-heading">{props.title}</h5>
        <p>Jan 2020 - Present <span className="font-italic">(Fulltime)</span></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident beatae assumenda voluptate recusandae. Aspernatur illo
        itaque ratione commodi cumque odit sunt soluta sapiente? Esse modi
        tempore nobis. In, cum hic. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        </p>

        <h6 className="font-weight-bold heading-2">Tools</h6>
        <p><img src="assets/images//docker.svg" alt="docker" /></p>

        <h6 className="font-weight-bold heading-2">Projects</h6>
        <ul className="list-group list-text mb-md-3">
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Project 1</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Project 2</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Project 3</a></li>
        </ul>

        <h6 className="font-weight-bold heading-2">Accomlishments</h6>
        <ul className="list-group list-text mb-md-3">
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Accomplishment 1</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Accomplishment 2</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Accomplishment 3</a></li>
        </ul>

        <h6 className="font-weight-bold heading-2">Recognitions</h6>
        <ul className="list-group list-text mb-md-3">
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Recognition 1</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Recognition 2</a></li>
        <li className="list-group-item"><span className="mr-3">&#42;</span><a href="#">Recognition 3</a></li>
        </ul>
    </div>
  )
}
