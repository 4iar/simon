const initialState = {
  strictMode: false,
  count: 0,
  waitingForResponse: false,
  sequence: {
    turn: 0,
    response: [],
    chain: []
  },
  buttonHighlight: {
    red: false,
    green: false,
    yellow: false,
    blue: false
  },
  audio: {
    red: false,
    green: false,
    yellow: false,
    blue: false,
    wrong: false
  },
  notifyWrong: false,
  won: false
};

export default initialState;
