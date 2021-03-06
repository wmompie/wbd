import React from 'react';
import { Label } from '../../layouts/elements';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextareaGroup = ({ label, name, value, onChange, error }) => (
  <div className='form-group'>
    <Label htmlFor={name}>{label}</Label>
    <textarea
      name={name}
      value={value}
      className={classnames('form-control', {
        'is-invalid': error,
      })}
      onChange={onChange}
      rows='2'
      aria-label={label}
    />
    {error && <div className='invalid-feedback'>{error}</div>}
  </div>
);

TextareaGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextareaGroup;
