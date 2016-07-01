import React from 'react';

import '../styles/inner-controls.scss';


export default class StartButton extends React.Component {
  render() {
    return (
      <section className="start">
        <button className="button start-button"></button>
        <div className="start-text">START</div>
      </section>
    );
  }
}


