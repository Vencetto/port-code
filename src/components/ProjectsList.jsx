import React from 'react';
import store from '../store';
import Project from './Project';
import '../styles/ProjectList.css'

function ProjectsList() {
  return (
    <div>
      <div className="" ></div>
      <h1 className="projects-title">Projects</h1>

      <div className="list-container">
        {store.map(e => <Project 
            title={e.title}
            codeLink={e.codeLink}
            techDescription={e.techDescription}
            imgSrc={e.imgSrc}
            watchlink={e.watchlink}
            />)}
      </div>

    </div>
  );
}

export default ProjectsList;
