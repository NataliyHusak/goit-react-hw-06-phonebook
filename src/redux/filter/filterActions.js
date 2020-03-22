import types from './filterTypes';

const filterAction = value => {
  return {
    type: types.ON_CHANGE,
    payload: {
      filter: value,
    },
    // meta: {
    //   delay: 800,
    //   throttle: 800,
    // },
  };
};
export default filterAction;
