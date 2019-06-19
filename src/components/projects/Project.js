import React from 'react';
import { boxShadow, ProjectLink, GitLink } from '../../layouts/elements';
import PropTypes from 'prop-types';

const Project = props => (
  // const { img, alt, projectLink, projectName, git } = props.project;

  <div className='card my-3 border-0 col-12 col-md-6 col-lg-4 col-xl-3'>
    <img src={props.project.img} className='card-img-top' alt={props.project.alt} style={boxShadow} />
    <div className='card-body px-0'>
      <ProjectLink href={props.project.projectLink} target='_blank' className='btn btn-block'>
        <i className='fas fa-desktop pr-2' /> {props.project.projectName}
      </ProjectLink>
      <GitLink href={props.project.git} target='_blank' className='btn btn-block'>
        <i className='fab fa-github pr-2' /> Github Code
      </GitLink>
    </div>
  </div>
);

Project.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  projectLink: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  git: PropTypes.string,
};

export default Project;
