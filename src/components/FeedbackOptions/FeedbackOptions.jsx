import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onSubmit }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" name={option} onClick={onSubmit}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
