import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
      return state; 
    case 'TOGGLE_STRICTMODE':
      return {...state, strictMode: !state.strictMode}; 
    default:
      return state;
  }
}
