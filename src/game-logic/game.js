import store from '../index.js';
import { startGame, highlightButton, setWaitingForResponse, unsetWaitingForResponse, setNextButton, clearResponses } from '../actions/gameActions';
import getRandomButton from '../utils/getRandomButton';

export default class Game {
  constructor() {
    this.store = store;
    this.startGame();
  }

  startGame() {
    this.showButtonSequence();

    const timeUntilResponse = this.store.getState().game.sequence.chain.length * 1000 + 1000;
    window.setTimeout(
      this.playerResponse.bind(this),
      timeUntilResponse
    );
  }

  playerResponse() {
    this.store.dispatch(setWaitingForResponse());

    this.waitForPlayerResponse();  // rename to waitForPlayerResponse, then handlePlayerResponse
  }

  waitForPlayerResponse() {
    const previousState = this.store.getState();
    this.unsubscribe = this.store.subscribe(this.checkStateChangeForPlayerResponse.bind(this, previousState));
  }

  checkStateChangeForPlayerResponse(previousState) {
    const currentState = this.store.getState();

    if (previousState.game.sequence.response.length !== currentState.game.sequence.response.length) {
      this.unsubscribe();
      this.handlePlayerResponse(currentState.game.sequence);
    } 
  }

  levelFinished() {
    const state = this.store.getState().game;
    const responseLength = state.sequence.response.length;
    const level = state.count;

    return responseLength === level;
  }

  handlePlayerResponse(sequence) {
    if (sequence.chain[sequence.turn - 1] === sequence.response[sequence.turn - 1]) {
      if (this.levelFinished()) {
        this.advanceLevel();
        this.store.dispatch(unsetWaitingForResponse());
      } else {
        this.waitForPlayerResponse();
      }
    } else {
      if (this.store.getState().game.strictMode) {
        this.store.dispatch(unsetWaitingForResponse());
        this.resetGame();
      } else {
        this.store.dispatch(unsetWaitingForResponse());
        this.store.dispatch(clearResponses());
        this.startGame();
      }
    }
  }

  resetGame() {
    this.store.dispatch(startGame());
    this.store.dispatch(setNextButton(getRandomButton()));
    this.startGame();
  }

  advanceLevel() {
    this.store.dispatch(setNextButton(getRandomButton()));
    this.store.dispatch(clearResponses());
    this.startGame();
  }

  showButtonSequence() {
    const colours = this.store.getState().game.sequence.chain;

    let time = 1000;
    colours.forEach((colour) => {
      window.setTimeout(this.lightButton.bind(this, colour), time);
      window.setTimeout(this.lightButton.bind(this, ''), time - 300);
      time += 1000;
    });
    window.setTimeout(this.lightButton.bind(this, ''), time - 300);
  }

  lightButton(colour) {
    this.store.dispatch(highlightButton(colour));
  }
}
