import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        You can find my resume here:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="tab4"
          href={process.env.PUBLIC_URL + "/assets/Ghazala resume.pdf"}
        >
          {" "}
          My resume
        </a>
      </p>
      <h3>Soft skills</h3>
      <ul>
        <li>Strong oral and written communication skills</li>
        <li>Problem-solver</li>
        <li>Time management</li>
        <li>Team player</li>
      </ul>
      <h3> Technical skills</h3>
      <ul>
        <li>git bash, vs code, cli</li>
        <li>Css3, Bootstrap, HTML, Javascript, Jquery</li>
        <li>Node js, Express</li>
        <li>Mysql, MongoDB, Sequelize, Mongoose</li>
        <li>Handlebars, Reactjs, Graphql, Redux</li>
      </ul>
    </div>
  );
}
