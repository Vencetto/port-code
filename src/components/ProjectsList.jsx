import React from 'react';
import store from '../store';
import Project from './Project';

function ProjectsList() {
  return (
    <div>

      <h1 class="projects-title">Projects</h1>

      <div class="list-container">
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
