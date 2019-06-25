import {combineReducers} from 'redux';

import { ChatReducer } from './ChatReducer';
import { AppReducer } from './AppReducer';

export default combineReducers({
    chat: ChatReducer,
    app: AppReducer
});