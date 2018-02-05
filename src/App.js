import React from 'react';
import MasterDetailFlow from './components/MasterDetailFlow';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import definitionsApp from './reducers/definitions';
import * as actions from './actions';

import './App.css';

const store = createStore(definitionsApp);

store.dispatch(actions.addDefinition());

const App = () => (
  <Provider store={store}>
    <div className="App">
      <MasterDetailFlow />
    </div>
  </Provider>
);

export default App;
