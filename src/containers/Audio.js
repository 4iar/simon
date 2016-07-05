import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

const getState = (state) => {
  return {
    audioToPlay: state.game.audio,
    wrong: state.game.wrong
  };
};

@connect(getState, null, null, {withRef: true})
export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url="../sounds/tone1.mp3" playing={this.props.wrong} />
      </div>
    );
  }
}
