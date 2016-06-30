import React from 'react';

import InnerControls from './InnerControls';
import OuterButtons from './OuterButtons';

import '../styles/simon-page.scss';


export default class Layout extends React.Component {
  render() {
    return (
      <div className="background-circle">
        <InnerControls />
        <OuterButtons />
      </div>
    );
  }
}
