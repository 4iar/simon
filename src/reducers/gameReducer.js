import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
      return state;
    case 'TOGGLE_STRICTMODE':
      return {...state, strictMode: !state.strictMode};
    case 'SET_NEXT_BUTTON':
      return {...state,
        count: state.count + 1,
        sequence: {
          chain: state.sequence.chain.concat([action.payload.nextButton]),
          turn: 0
        }};
    default:
      return state;
  }
}
