/* import React from 'react';
import ReactDom from 'react-dom'; */
import PropTypes from 'prop-types';

export default function Friend({ avatar, isOnline, name }) {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}
Friend.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
