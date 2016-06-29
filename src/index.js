import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import SimonPage from './containers/SimonPage';

const store = configureStore();


render(
  <Provider store={store}>
    <SimonPage />
  </Provider>, 
  document.getElementById('app')
);
