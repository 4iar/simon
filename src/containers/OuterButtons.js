import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import '../styles/outer-buttons.scss';

const getWaitingResponse = (state) => {
  return {
    waitingForResponse: state.game.waitingForResponse
  };
};

@connect(getWaitingResponse, null, null, {withRef: true})
export default class OuterButtons extends React.Component {
  render() {
    let classes = {};
    const colours = ['green', 'red', 'yellow', 'blue'];
    // wown this is messy TODO: make this less shit
    for (let i = 0; i < colours.length; i++) {
      const clickableClass = {};
      clickableClass['clickable-' + colours[i]] = !this.props.waitingForResponse;
      classes[colours[i]] = classNames(colours[i],
        'response-button',
        clickableClass);
    }

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
