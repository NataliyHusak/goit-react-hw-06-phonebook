import types from './filterTypes';

const filterReducers = (filter = '', action) => {
  switch (action.type) {
    case types.ON_CHANGE:
      return action.payload.filter;
    default:
      return filter;
  }
};
export default filterReducers;
