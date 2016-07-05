import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { toggleStrictMode } from '../actions/gameActions';

import '../styles/inner-controls.scss';

const getStrictModeState = (state) => {
  return {
    strictMode: state.game.strictMode
  };
};


@connect(getStrictModeState, {toggleStrictMode}, null, {withRef: true})
export default class StrictModeButton extends React.Component {
  handleClick() {
    this.props.toggleStrictMode();
  }

  render() {
    let indicatorClasses = classNames('strict-indicator', {on: this.props.strictMode});
    return (
      <section className="strict">
        <div className={indicatorClasses}></div>
        <button onClick={this.handleClick.bind(this)} className="button strict-button"></button>
        <div className="strict-text">STRICT</div>
      </section>
    );
  }
}

