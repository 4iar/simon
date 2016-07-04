import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { buttonClicked, stopAudio, playAudio } from '../actions/gameActions';

import '../styles/outer-buttons.scss';

const getState = (state) => {
  return {
    waitingForResponse: state.game.waitingForResponse,
    buttonHighlight: state.game.buttonHighlight
  };
};

@connect(getState, {buttonClicked, stopAudio, playAudio}, null, {withRef: true})
export default class OuterButtons extends React.Component {

  handleMouseUp() {
    //TODO: use this for stopping tone sound
    this.props.stopAudio();
  }

  handleMouseDown(colour) {
    // start playing appropriate sound
    if (this.props.waitingForResponse) {
      this.props.playAudio(colour);
    }
  }

  handleClick (colour) {
    this.props.buttonClicked(colour);
  }

  generateClasses () {
    let classes = {};
    const colours = ['green', 'red', 'yellow', 'blue'];
    // wown this is messy TODO: make this less shit
    for (let i = 0; i < colours.length; i++) {
      let clickableClass = {};
      clickableClass['clickable-' + colours[i]] = this.props.waitingForResponse;

      let highlightClass = {};
      highlightClass['highlight-' + colours[i]] = this.props.buttonHighlight[colours[i]];

      classes[colours[i]] = classNames(colours[i],
        'response-button',
        clickableClass,
        highlightClass);
    }
    return classes;
  }

  render() {
    const classes = this.generateClasses();

    return (
      <div className="main">
        <div onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this, 'green')} onClick={this.handleClick.bind(this, 'green')} className={classes['green']} />
        <div onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this, 'red')} onClick={this.handleClick.bind(this, 'red')} className={classes['red']} />
        <div onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this, 'yellow')} onClick={this.handleClick.bind(this, 'yellow')} className={classes['yellow']} />
        <div onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this, 'blue')} onClick={this.handleClick.bind(this, 'blue')} className={classes['blue']} />
      </div>
    );
  }
}
