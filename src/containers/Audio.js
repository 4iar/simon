import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

const getState = (state) => {
  return {
    audioToPlay: state.game.audio,
    wrong: state.game.notifyWrong
  };
};

@connect(getState, null, null, {withRef: true})
export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" playing={this.props.audioToPlay['red']} />
        <ReactPlayer url="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" playing={this.props.audioToPlay['green']} />
        <ReactPlayer url="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" playing={this.props.audioToPlay['yellow']} />
        <ReactPlayer url="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" playing={this.props.audioToPlay['blue']} />
        <ReactPlayer url="../sounds/tone1.mp3" playing={this.props.wrong} />
      </div>
    );
  }
}
