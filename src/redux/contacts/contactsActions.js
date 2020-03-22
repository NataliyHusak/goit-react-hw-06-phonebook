import types from './contactsTypes';

export const addContact = contacts => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contacts,
    },
  };
};
export const removeContact = id => {
  return {
    type: types.REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const setContactsWithLocalStorage = contacts => {
  return {
    type: types.SET_CONTACTS_WITH_LOCAL_STORAGE,
    payload: {
      contacts,
    },
  };
};
