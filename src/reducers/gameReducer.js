import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
      return {...state,
        count: 0,
        sequence: {
          chain: [],
          turn: 0
        }
      };
    case 'TOGGLE_STRICTMODE':
      return {...state, strictMode: !state.strictMode};
    case 'SET_NEXT_BUTTON':
      return {...state,
        count: state.count + 1,
        sequence: {
          chain: state.sequence.chain.concat([action.payload.nextButton]),
          turn: 0
        }};
    case 'HIGHLIGHT_BUTTON': {
      let buttonHighlight = {
        red: false,
        green: false,
        yellow: false,
        blue: false
      };
      buttonHighlight[action.payload.colour] = true;
      return {
        ...state,
        buttonHighlight
      };
    }
    case 'SET_RESPONSE_WAITING':
      return {...state,
        waitingForResponse: action.payload.waiting
      };
    default:
      return state;
  }
}
