import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentageCounter,
}) {
  return (
    <ul>
      <li>
        <p>good: {good}</p>
      </li>
      <li>
        <p>neutral: {neutral}</p>
      </li>
      <li>
        <p>bad: {bad}</p>
      </li>
      <li>
        <p>total: {total}</p>
      </li>
      <li>
        <p>positive feedback {percentageCounter}</p>
      </li>
    </ul>
  );
}

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentageCounter: PropTypes.string.isRequired,
};
