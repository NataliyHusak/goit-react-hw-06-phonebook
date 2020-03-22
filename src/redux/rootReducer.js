import { combineReducers } from 'redux';
import contactsReducers from './contacts/contactsReducers';
import filterReducers from './filter/filterReducers';

const rootReducer = combineReducers({
  contacts: contactsReducers,
  filter: filterReducers,
});
export default combineReducers({ phoneBook: rootReducer });
