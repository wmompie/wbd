import React from 'react';
import Project from './Project';
import { Heading2 } from '../../elements';
import PropTypes from 'prop-types';

const Projects = ({ id }) => (
  <div className='container-fluid text-center my-5' id={id}>
    <Heading2 lightBG className='display-5'>
      PROJECTS
    </Heading2>
    <div className='row justify-content-around my-5'>
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365026/WBD/YelpCamp_uenmam.png'
        alt='YelpCamp Clone Project'
        projectLink='https://sleepy-fjord-52457.herokuapp.com/'
        projectName='Project - YelpCamp Clone'
        git='https://github.com/wmompie/YelpCamp'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365307/WBD/Easterseals_dmzqo9.png'
        alt='Easterseals Clone Project'
        projectLink='http://wmompie.mydevryportfolio.com/easterseals/index.html'
        projectName='Project - Easterseals Run'
        git='https://github.com/wmompie/easterSealsRun'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365474/WBD/Robofriends_kwzv06.png'
        alt='RoboFriends Clone Project'
        projectLink='https://determined-robofriends-b4689f.netlify.com/'
        projectName='Project - RoboFriends with React'
        git='https://github.com/wmompie/RoboFriends'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365830/WBD/landing-page_zotwxs.png'
        alt='Landing Page Project'
        projectLink='https://landing-page-temp.netlify.com'
        projectName='Project - Landing Page Template'
        git='https://github.com/wmompie/landing-page'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365830/WBD/overwatch_jp708m.png'
        alt='Overwatch Project'
        projectLink='https://overwatch-project.netlify.com'
        projectName='Project - Overwatch Fan Website'
        git='https://github.com/wmompie/overwatch'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365829/WBD/bbq-grills_sg9qi4.png'
        alt='BBQ Grills Project'
        projectLink='https://bbq-grills.netlify.com'
        projectName='Project - BBQ Grills Website'
        git='https://github.com/wmompie/bbq-grills'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365830/WBD/video-games_kzlyto.png'
        alt='Video Games Project'
        projectLink='https://video-games-project.netlify.com'
        projectName='Project - Video Games Project'
        git='https://github.com/wmompie/video-games'
      />
      <Project
        img='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1557365828/WBD/zoo_zjqss4.png'
        alt='Zoo Project'
        projectLink='https://zoo-project.netlify.com'
        projectName='Project - Local Zoo Website'
        git='https://github.com/wmompie/zoo'
      />
    </div>
  </div>
);

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Projects;
