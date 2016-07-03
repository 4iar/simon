import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
      return {...state,
        count: 0,
        sequence: {
          chain: [],
          response: [],
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
          response: [],
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
    case 'CLEAR_RESPONSES': {
      return {...state,
        sequence: {...state.sequence,
          response: []
        }
      };
    }
    case 'SET_RESPONSE_WAITING':
      return {...state,
        waitingForResponse: action.payload.waiting
      };
    case 'BUTTON_CLICKED':
      if (state.waitingForResponse) {
        return {...state,
          sequence: {...state.sequence,
            turn: state.sequence.turn + 1,
            response: state.sequence.response.concat([action.payload.colour])
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
