import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.prod';

import SimonPage from './containers/SimonPage';

const store = configureStore();
export default store;


render(
  <Provider store={store}>
    <SimonPage />
  </Provider>, 
  document.getElementById('app')
);
