/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

require('./favicon.ico');


import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';

// shells
import Root from './shells/Root';


const history = createHistory();

const store = configureStore(
  //aditional mids
  history
);


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./shells/Root', () => {
    const NewRoot = require('./shells/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
