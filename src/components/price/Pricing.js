import React, { Component } from 'react';
import { Heading2, Card, FlexItems, CardI, CardH3, CardUL } from '../../layouts/elements';
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
              <CardI className="fas fa-university fa-2x"></CardI>
              <div>
                <CardH3>Investment Banking</CardH3>
                <CardUL>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </CardUL>
              </div>
            </div>
            <div>
              <CardI className="fas fa-book-reader fa-2x"></CardI>
              <div>
                <CardH3>Portfolio Manager</CardH3>
                <CardUL>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </CardUL>
              </div>
            </div>
            <div>
              <CardI className="fas fa-pencil-alt fa-2x"></CardI>
              <div>
                <CardH3>Tax and Custodial</CardH3>
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
