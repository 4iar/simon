import React from 'react';
import { connect } from 'react-redux';

import { startGame } from '../actions/gameActions';

import '../styles/inner-controls.scss';


@connect(null, {startGame}, null, {withRef: true})
export default class StartButton extends React.Component {
  render() {
    return (
      <section className="start">
        <button onClick={this.props.startGame.bind(this)} className="button start-button"></button>
        <div className="start-text">START</div>
      </section>
    );
  }
}


