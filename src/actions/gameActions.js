export function startGame() {
  return {
    type: 'START_GAME'
  };
}

export function toggleStrictMode() {
  return {
    type: 'TOGGLE_STRICTMODE'
  };
}

export function setNextButton(nextButton) {
  return {
    type: 'SET_NEXT_BUTTON',
    payload: {
      nextButton 
    }
  };
}
