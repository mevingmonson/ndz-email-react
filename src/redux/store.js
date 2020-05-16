import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// For Development
import reduxLogger from 'redux-logger';

// Reducer
import reducer from './reducers/reducer';

const middleware = applyMiddleware(reduxThunk, reduxLogger);

const configureStore = () => createStore(reducer, middleware);

export default configureStore;
