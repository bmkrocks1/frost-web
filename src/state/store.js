import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore () {

  /**
   * Logs all actions and states after they are dispatched.
   */
  const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  };

  return createStore(reducers, applyMiddleware(thunk, logger));
};
