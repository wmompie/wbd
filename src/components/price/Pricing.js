import React, { Component } from 'react';
import { Heading2 } from '../../layouts/elements';
import PropTypes from 'prop-types';

class Pricing extends Component {
  render() {
    return (
      <div className='container-fluid text-center my-5' id={this.props.id}>
        <Heading2 lightBG className='display-5'>
          PRICING
        </Heading2>
      </div>
    );
  }
}

Pricing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pricing;
