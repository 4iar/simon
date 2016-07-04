import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

const getState = (state) => {
  return {
    audioToPlay: state.game.audio
  };
};

@connect(getState, null, null, {withRef: true})
export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url="../sounds/tone1.mp3" playing={this.props.audioToPlay['red']} loop={true} />
        <ReactPlayer url="../sounds/tone2.mp3" playing={this.props.audioToPlay['green']} loop={true} />
        <ReactPlayer url="../sounds/tone3.mp3" playing={this.props.audioToPlay['yellow']} loop={true} />
        <ReactPlayer url="../sounds/tone4.mp3" playing={this.props.audioToPlay['blue']} loop={true} />
      </div>
    );
  }
}
