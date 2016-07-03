import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { buttonClicked } from '../actions/gameActions'

import '../styles/outer-buttons.scss';

const getState = (state) => {
  return {
    waitingForResponse: state.game.waitingForResponse,
    buttonHighlight: state.game.buttonHighlight
  };
};

@connect(getState, {buttonClicked}, null, {withRef: true})
export default class OuterButtons extends React.Component {
  
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
        <div onClick={this.handleClick.bind(this, 'green')} className={classes['green']} />
        <div onClick={this.handleClick.bind(this, 'red')} className={classes['red']} />
        <div onClick={this.handleClick.bind(this, 'yellow')} className={classes['yellow']} />
        <div onClick={this.handleClick.bind(this, 'blue')} className={classes['blue']} />
      </div>
    );
  }
}
