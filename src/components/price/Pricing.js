import React, { Component } from 'react';
import { Heading2, Card, FlexItems, CardI, CardI2, CardH3, CardUL } from '../../layouts/elements';
import PropTypes from 'prop-types';

class Pricing extends Component {
  render() {
    return (
      <div className='container-fluid text-center my-5' id={this.props.id}>
        <Heading2 lightBG className='display-5'>
          PRICING
        </Heading2>
        <Card>
          <FlexItems>
            <div>
              <CardI className='fas fa-network-wired fa-2x'></CardI>
              <div>
                <CardH3>Web Hosting</CardH3>
                <CardUL>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </CardUL>
              </div>
            </div>
            <div>
              <CardI2 className='fas fa-coins fa-2x'></CardI2>
              <div>
                <CardH3>Cloud Storage</CardH3>
                <CardUL>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </CardUL>
              </div>
            </div>
            <div>
              <CardI className='fas fa-search-dollar fa-2x'></CardI>
              <div>
                <CardH3>SEO Assistance</CardH3>
                <CardUL>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </CardUL>
              </div>
            </div>
          </FlexItems>
        </Card>
      </div>
    );
  }
}

Pricing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pricing;
