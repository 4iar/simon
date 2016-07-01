import React from 'react';

import StrictModeButton from './StrictModeButton';
import StartButton from './StartButton';
import Count from './Count';

import '../styles/inner-controls.scss';


export default class InnerControls extends React.Component {
  render() {
    return (
      <div className="inner-circle">
        <p className="simon-logo">Simon</p>

        <div className="middle-row">

          <Count />
          
          <StartButton />

          <StrictModeButton />

        </div>

      </div>
    );
  }
}
