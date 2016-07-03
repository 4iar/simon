const initialState = {
  strictMode: false,
  count: 0,
  waitingForResponse: true,
  sequence: {
    turn: 0,
    chain: []
  },
  buttonHighlight: {
    red: false,
    green: false,
    yellow: false,
    blue: false
  }
};

export default initialState;
