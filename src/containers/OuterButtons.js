import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import '../styles/outer-buttons.scss';

const getState = (state) => {
  return {
    waitingForResponse: state.game.waitingForResponse,
    buttonHighlight: state.game.buttonHighlight
  };
};

@connect(getState, null, null, {withRef: true})
export default class OuterButtons extends React.Component {

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
        <div className={classes['green']} />
        <div className={classes['red']} />
        <div className={classes['yellow']} />
        <div className={classes['blue']} />
      </div>
    );
  }
}
