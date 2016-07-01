import React from 'react';

import '../styles/inner-controls.scss';

export default class InnerControls extends React.Component {
  render() {
    return (
      <div className="inner-circle">
        <p className="simon-logo">Simon</p>

        <div className="middle-row">
          <section className="count">
            <div className="count-counter">02</div>
            <div className="count-text">COUNT</div>
          </section>

          <section className="start">
            <button className="button start-button"></button>
            <div className="start-text">START</div>
          </section>

          <section className="strict">
            <div className="strict-indicator on"></div>
            <button className="button strict-button"></button>
            <div className="strict-text">STRICT</div>
          </section>
        </div>

      </div>
    );
  }
}
