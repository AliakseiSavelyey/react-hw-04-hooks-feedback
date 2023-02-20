import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
