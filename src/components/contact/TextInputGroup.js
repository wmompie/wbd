import React from 'react';
import { Label } from '../../layouts/elements';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className='form-group'>
      <Label htmlFor={name}>{label}</Label>
      <input
        type={type}
        name={name}
        className={classnames('form-control', {
          'is-invalid': error,
        })}
        value={value}
        onChange={onChange}
        aria-label={label}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  text: 'text',
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextInputGroup;
