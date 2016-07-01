import React from 'react';

import StrictModeButton from './StrictModeButton';
import StartButton from './StartButton';

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

          <StartButton />

          <StrictModeButton />

        </div>

      </div>
    );
  }
}
