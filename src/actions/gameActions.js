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

export function highlightButton(colour) {
  return {
    type: 'HIGHLIGHT_BUTTON',
    payload: {
      colour
    }
  };
}

export function setWaitingForResponse() {
  return {
    type: 'SET_RESPONSE_WAITING',
    payload: {
      waiting: true
    }
  };
}
export function unsetWaitingForResponse() {
  return {
    type: 'SET_RESPONSE_WAITING',
    payload: {
      waiting: false 
    }
  };
}

export function buttonClicked(colour) {
  return {
    type: 'BUTTON_CLICKED',
    payload: {
      colour
    }
  };
}

export function clearResponses() {
  return {
    type: 'CLEAR_RESPONSES'
  };
}

export function playAudio(colour) {
  return {
    type: 'PLAY_AUDIO',
    payload: {
      colour
    }
  }
}

export function stopAudio() {
  return {
    type: 'STOP_AUDIO'
  }
}
