import React from 'react';
import Project from "../Project";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <Project
      id={1}
      key ={1}
      name = {"techblog"}
      image = {"/assets/project1.png"}
      githubRepo = {"https://github.com/ghazalaahmed/techblog"}
      deployLink = {"https://techblogmodule14.herokuapp.com/"}
      div>
      <Project
      id={2}
      key ={2}
      name = {"passwordgenerator"}
      image = {"/assets/passwordgenerator.png"}
      githubRepo = {"https://github.com/ghazalaahmed/passwordgenerator.git"}
      deployLink = {"https://ghazalaahmed.github.io/passwordgenerator/"}
      />
      <Project
      id={3}
      key ={3}
      name = {"notetaker"}
      image = {"/assets/Notetaker.png"}
      githubRepo = {"https://github.com/ghazalaahmed/notetaker.git"}
      deployLink = {"https://note-takerchallenge.herokuapp.com/notes"}
      />
      <Project
      id={4}
      key ={4}
      name = {"weatherdashboard"}
      image = {"/assets/weatherdashboard.png"}
      githubRepo = {"https://github.com/ghazalaahmed/weatherdashboard.git"}
      deployLink = {"https://ghazalaahmed.github.io/weatherdashboard"}
       <div>
  );
}
