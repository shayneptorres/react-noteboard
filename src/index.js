import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import noteReducer from './reducers/note-reducer'
import noteBaseState from './reducers/noteBaseState'

import './index.css';

export function configureStore(uninitializedStore, initialState, { sagas = [] }={}) {
  // const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
   process.env.NODE_ENV !== 'production' &&
   typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       // Specify here name, actionsBlacklist, actionsCreators and other options
     }) : compose;

  const enhancer = composeEnhancers(
       // other store enhancers if any
      );

  const store = createStore(uninitializedStore, initialState, enhancer);

  // Startup Sagas
  // sagas.forEach( (saga) => sagaMiddleware.run(saga) );

  return store;
}
console.log(noteReducer,noteBaseState)
const store = configureStore(noteReducer, noteBaseState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
