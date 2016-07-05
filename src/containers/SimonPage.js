import React from 'react';

import InnerControls from './InnerControls';
import OuterButtons from './OuterButtons';
import Audio from './Audio';

import '../styles/simon-page.scss';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="background-circle">
          <InnerControls />
          <OuterButtons />
        </div>
        <Audio />
      </div>
    );
  }
}
