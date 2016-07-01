import React from 'react';

import StrictModeButton from './StrictModeButton';

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

          <StrictModeButton />

        </div>

      </div>
    );
  }
}
