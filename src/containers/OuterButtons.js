import React from 'react';

import '../styles/outer-buttons.scss';

export default class OuterButtons extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="response-button green" />
        <div className="response-button red" />
        <div className="response-button yellow" />
        <div className="response-button blue" />
      </div>
    );
  }
}
