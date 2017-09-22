import createStore from 'redux/lib/createStore.js';
import applyMiddleware from 'redux/lib/applyMiddleware.js'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducer/index.js';

const loggerMiddleware = createLogger();

//const initialState = window.__INITIAL_STATE__

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      //loggerMiddleware
    )
  )
}

const initialState = {
    loaderCount:0,
    bFlags:{}
}


const store = configureStore(initialState);

console.log('store--->',store,store.getState())

export default store;
