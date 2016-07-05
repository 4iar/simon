import React from 'react';
import { connect } from 'react-redux';
import { Howl } from 'howler';

import _ from 'lodash';

const getState = (state) => {
  const audioToPlay = [].concat(_.invert(state.game.audio, true)[ "true" ]);
  return {
    audioToPlay
  };
};

@connect(getState, null, null, {withRef: true})
export default class Audio extends React.Component {
  constructor() {
    super();
    this.sounds = {
      red: new Howl({urls:['../sounds/button1.mp3']}),
      green: new Howl({urls:['../sounds/button2.mp3']}),
      blue: new Howl({urls:['../sounds/button3.mp3']}),
      yellow: new Howl({urls:['../sounds/button4.mp3']}),
      wrong: new Howl({urls:['../sounds/wrong.mp3']})
    };
  }

  render() {
    this.props.audioToPlay.forEach((audioID) => {
      if (audioID){
        this.sounds[audioID].play();
      }
    });

    //TODO: add mute handing
    return (
      <div>
      </div>
    );
  }
}
