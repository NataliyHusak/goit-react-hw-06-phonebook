import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from './middleware/logger';
import timeout from './middleware/timeout';
import throttle from './middleware/throttle';

const middleware = [logger, throttle, timeout];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
