import {combineReducers} from '@/containers/Frame/Header/node_modules/redux';

import pageHeaderReducer from './pageHeader.js';
import userReducer from './userReducer';

const appReducer = combineReducers({
    pageHeaderReducer,
    userReducer,
});
export default appReducer;