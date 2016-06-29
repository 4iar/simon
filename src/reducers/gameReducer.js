import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PLACEHOLDER':
      return state;
    default:
      return state;
  }
}
