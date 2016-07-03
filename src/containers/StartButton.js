import React from 'react';
import { connect } from 'react-redux';

import { startGame, setNextButton } from '../actions/gameActions';
import getRandomButton from '../utils/getRandomButton';

import '../styles/inner-controls.scss';


@connect(null, {startGame, setNextButton}, null, {withRef: true})
export default class StartButton extends React.Component {
  handleClick() {
    this.props.startGame();
    this.props.setNextButton(getRandomButton());
  }

  render() {
    return (
      <section className="start">
        <button onClick={this.handleClick.bind(this)} className="button start-button"></button>
        <div className="start-text">START</div>
      </section>
    );
  }
}
