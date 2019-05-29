import React from 'react';
import { Link } from 'react-scroll';
import { ToTop, SalesLink } from '../layouts/elements';
import styled from 'styled-components';

import Copyright from '../components/footer/Copyright';

const H1 = styled.h1`
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: underline;
`;

const Section = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  line-height: 1.5;
  padding: 30px 0;
`;

const Terms = () => (
  <div id='top' role='main'>
    <Link to='top' smooth={true} duration={900}>
      <ToTop>
        <i className='fas fa-chevron-up' />
      </ToTop>
    </Link>
    <div className='container mt-4'>
      <H1>Terms and Conditions</H1>
      <Section>
        <p>
          Quotes are for estimation purposes and is not a guarantee of cost for services. Quotes are based on current
          information from client about the project requirements. Actual cost may change once project elements are
          finalized or negotiated. Client will be quoted in advance for approval of any changes in cost prior to them
          being incurred. The estimates are provided as a service to our clients. However, as each custom package and
          project is unique, so too is each estimate. Following are some general parameters and considerations for Web
          Blueprint Design. Please email{' '}
          <a href='mailto:sales@webblueprintdesign.com' style={{ color: '#015d84', textDecoration: 'underline' }}>
            sales&#64;webblueprintdesign.com
          </a>{' '}
          with any additional questions.
        </p>
        <ul>
          <li>
            Prices estimated by any project are estimates. Your prices may vary based on the documented facts of the
            project.
          </li>
          <li>First Time Client projects are estimated on a 35&#37; prepaid basis.</li>
          <li>
            Product will be handed to the client once charges are paid in full upon receiving a final estimate/quote.
          </li>
          <li>
            Prices estimated in quote may not be valid in the case of special service requirements that are requested by
            the client.
          </li>
          <li>Estimates are not guaranteed until all information and/or instructions have been provided.</li>
          <li>Client not supplying text and/or images will receive an estimate including extra fees.</li>
          <li>
            Some services may require accessory charges to the client. These may include: SEO configuration, mobile
            optimization, special features, outside resources needed, extra content, etc. Charges for services, and
            their explanation, will follow with updated estimates. If you require additional services, you may add them
            for the corresponding fee. Price estimated by any project is what has been discussed thus far only.
          </li>
          <li>
            All large projects must be accompanied by an itemization of content, description and any special requests
            for declared value purposes. Failure to provide this could affect quality and lead time.
          </li>
          <li>
            Estimates may be based on a one-person workload. If the designer/developer is unable to complete alone, or
            the project requires additional outside resources, we may supply the necessary personnel. Additional charges
            will apply.
          </li>
          <li>
            If recreating or fixing is required on your current project, additional and/or different charges may apply.
          </li>
          <li>
            Web Blueprint Design will not guarantee your provided content is copyrighted and will not be held
            accountable for any legal matters of copyright infringement.
          </li>
          <li>Clients with multiple projects may have discrepancies in pricing due to size.</li>
          <li>If payment terms are Credit Card an additional fee may apply.</li>
          <li>
            All projects are to be paid for on time if monthly charges of the client’s project&#40;s&#41; is included.
            In the case where the client does not pay or notify Web Blueprint Design of cancellation, the project will
            be cancelled at the client’s expense.
          </li>
          <li>
            In the case of kill clause, after the work has been started, the client is responsible to owe a pro-rated
            amount of the total based on the amount of work completed up to date of cancellation with an early
            termination fee of 10% &#40;of the total estimated amount thus far&#41;. Deposits and down payments made are
            non-refundable.
          </li>
          <li>
            If the project is work-for-hire, rights to the client will be determined once it has been completed by the
            designer/developer depending on the terms of said work-for-hire personnel. These can include but are not
            limited to design, logo, text, images, styling, coding, etc.
          </li>
          <li>
            Delay in the client’s project will depend on the client’s participation to provide the necessary
            documents/information to keep the designer/developer on schedule.
          </li>
          <li>
            A signed copy of each estimate is required prior to proceeding with the project, either just starting or
            continuing. Failure to do so in a timely manner will impact the lead time of service and will not hold the
            designer/developer held accountable.
          </li>
          <li>
            You, the client, agree that the designer/developer has the right to retain a copy of all documentation they
            create to be used in a portfolio. Web Blueprint Design agrees the work in the portfolio will remain in the
            possession of Web Blueprint Design at all times with the understanding of client confidentiality. Sensitive
            information will not be disclosed on any parties involved. Web Blueprint Design will agree, at the client’s
            requests, to remove the company’s name and any identifying information. This will only be a representative
            piece of the work the designer/developer creates. Client has the right to approve the piece&#40;s&#41; Web
            Blueprint Design chooses.
          </li>
          <li>
            Client has the right to disagree to have the designer/developer showcase this project on their portfolio
            which will need to be addressed during or after time of service.
          </li>
        </ul>
      </Section>
    </div>
    <Copyright />
  </div>
);

export default Terms;
