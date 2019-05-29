import React from 'react';
import { Link } from 'react-scroll';
import { ToTop } from '../layouts/elements';
import {
  Anchor,
  ContactContainer,
  ContactLI,
  ContactSection,
  EduContainer,
  ExpContainer,
  FontIcon,
  ResumeDiv,
  ResumeH1,
  ResumeH2,
  ResumeH3,
  ResumeH4,
  ResumeHr,
  ResumeUL,
  SkillsContainer,
  SummaryContainer,
} from '../layouts/elements/Resume';

const Resume = () => (
  <ResumeDiv className='py-5' id='top' role='main'>
    <Link to='top' smooth={true} duration={900}>
      <ToTop>
        <i className='fas fa-chevron-up' />
      </ToTop>
    </Link>
    <div className='container-fluid'>
      <ResumeH1>William Mompie</ResumeH1>
      <ResumeH2>Web Developer</ResumeH2>
    </div>
    <div className='container-fluid'>
      <ContactContainer className='row'>
        <ContactSection primary>
          <ResumeUL>
            <li>
              <FontIcon className='fas fa-map-marker-alt pr-3' />
              7732 Dilido Blvd
            </li>
            <ContactLI>Miramar, FL 33023</ContactLI>
            <li>
              <FontIcon className='fas fa-phone pr-3' /> &#40;954&#41; 865-2721
            </li>
            <li>
              <FontIcon className='far fa-envelope pr-3' />
              <Anchor href='mailto:wmompie@gmail.com'>wmompie&#64;gmail.com</Anchor>
            </li>
          </ResumeUL>
        </ContactSection>
        <ContactSection primary>
          <ResumeUL>
            <li>
              <FontIcon className='fab fa-linkedin pr-3' />
              <Anchor href='www.linked.com/in/wmompie' target='_blank' rel='noopener noreferrer'>
                www.linkedin.com/in/wmompie
              </Anchor>
            </li>
            <li>
              <FontIcon className='fab fa-github-square pr-3' />
              <Anchor href='https://github.com/wmompie' target='_blank' rel='noopener noreferrer'>
                https://github.com/wmompie
              </Anchor>
            </li>
            <li>
              <FontIcon className='fas fa-book-open pr-3' />
              <Anchor href='www.webblueprintdesign.com/portfolio' target='_blank' rel='noopener noreferrer'>
                www.webblueprintdesign.com/portfolio
              </Anchor>
            </li>
          </ResumeUL>
        </ContactSection>
      </ContactContainer>
    </div>

    <SummaryContainer className='container-fluid'>
      <ResumeH3>Summary</ResumeH3>
      <p>
        Dynamic and detail-oriented Web Developer with a knack for conceptualizing and delivering elegant, user-friendly
        solutions effectively and efficiently. Possesses a track record of developing a fully functional website,
        creating web apps and community projects.
      </p>
    </SummaryContainer>

    <div className='container-fluid'>
      <ResumeH3 primary>
        <FontIcon className='fas fa-code' /> Skills
      </ResumeH3>
      <ResumeHr />
      <SkillsContainer className='row'>
        <div className='col-sm-6 col-lg-6 col-xl-1'>
          <ResumeH4 primary>Front-End</ResumeH4>
          <ResumeUL>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6 / jQuery</li>
          </ResumeUL>
        </div>
        <div className='col-sm-6 col-lg-6 col-xl-1'>
          <ResumeH4 primary>Back-End</ResumeH4>
          <ResumeUL>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>JSON / APIs</li>
          </ResumeUL>
        </div>
        <div className='col-sm-6 col-lg-6 col-xl-1'>
          <ResumeH4 primary>Source Control</ResumeH4>
          <ResumeUL>
            <li>Git / GitHub</li>
          </ResumeUL>
        </div>
        <div className='col-sm-6 col-lg-6 col-xl-1'>
          <ResumeH4 primary>Frameworks / Templates</ResumeH4>
          <ResumeUL>
            <li>Bootstrap</li>
            <li>Express.js</li>
            <li>EJS / Handlebars</li>
          </ResumeUL>
        </div>
      </SkillsContainer>
    </div>

    <div className='container-fluid'>
      <ResumeH3 primary>
        <FontIcon className='fab fa-whmcs' /> Interests
      </ResumeH3>
      <ResumeHr />
      <p className='text-center pb-3'>
        SASS, React / Redux, Angular, Vue, Python, GraphQL, Ember.js, PostgreSQL, Apollo, Webpack
      </p>
    </div>

    <div className='container-fluid pb-3'>
      <ResumeH3 primary>
        <FontIcon className='fab fa-black-tie' /> Experience
      </ResumeH3>
      <ResumeHr />
      <ExpContainer>
        <div>
          <h4>Jan 2017 - present</h4>
        </div>
        <div className='pl-4'>
          <h5 className='font-weight-bold'>Web Developer</h5>
          <h6>
            <em>Web Blueprint Design, LLC</em>
          </h6>
          <ul>
            <li>Build custom websites for clients based on their specific needs</li>
            <li>Produce websites using HTML5, CSS3, Bootstrap, JavaScript, jQuery, Node.js, MongoDB, Express</li>
            <li>
              Assist clients select their theme of choice and provide the solution to hosting and setting up websites
            </li>
          </ul>
        </div>
      </ExpContainer>
      <ExpContainer>
        <div>
          <h4>Apr 2017 - present</h4>
        </div>
        <div className='pl-4'>
          <h5 className='font-weight-bold'>Product Repair Associate</h5>
          <h6>
            <em>Paul N. Gardner Company, Inc.</em>
          </h6>
          <ul>
            <li>Provide fast and friendly service leading to a 2% increase in sales from the previous year</li>
            <li>Handle large call volume while maintaining accuracy, efficiency, and a positive friendly attitude</li>
            <li>Provide superior customer service</li>
            <li>Inspect, operate, or test machinery or equipment to diagnose machine malfunctions</li>
            <li>Provide clients with quotes, invoices, and service orders via email</li>
          </ul>
        </div>
      </ExpContainer>
    </div>

    <div className='container-fluid'>
      <ResumeH3 primary>
        <FontIcon className='fas fa-graduation-cap' /> Education
      </ResumeH3>
      <ResumeHr />

      <EduContainer>
        <div>
          <h4>Jan 2017 - Jun 2019</h4>
        </div>
        <div className='pl-4'>
          <ResumeH4 primary>DeVry University - Bachelor of Science in Multimedia Design and Development</ResumeH4>
          <ul>
            <li>College Completer Scholarship recipient</li>
            <li>Dean's List</li>
          </ul>
          <ResumeH4 primary>DeVry University - Associate of Applied Science in Web Graphic Design</ResumeH4>
          <ResumeH4 primary>
            ITT Technical Institute - Associate of Applied Science in Computer Electronics and Engineering
          </ResumeH4>
        </div>
      </EduContainer>
    </div>
  </ResumeDiv>
);

export default Resume;
