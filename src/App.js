import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

import Counter from './components/Counter';
import DisplayCounter from './components/DisplayCounter';

const App = () => {
  return (
    <Provider store={store}>
      <DisplayCounter />
      <Counter />
    </Provider>
  );
};

export default App;
