import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import slide from '../../transition/slide.module.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import { saveToLocalStorage } from '../../services/localStorage';

const removeWithLocalStorage = (contacts, id) => {
  return contacts.filter(contact => contact.id !== id);
};
const ContactList = ({ filterContacts, removeContact }) => {
  const clickDelete = btnContact => {
    const { id } = btnContact.currentTarget;
    removeContact(id);
    saveToLocalStorage('contacts', removeWithLocalStorage(filterContacts, id));
  };

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filterContacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          unmountOnExit
          classNames={slide}
        >
          <li key={contact.id} className={styles.item}>
            <div className={styles.wrap}>
              <span className={styles.name}>{contact.name}:</span>
              <span className={styles.number}>{contact.number}</span>
            </div>
            <button
              id={contact.id}
              className={styles.button}
              type="button"
              onClick={clickDelete}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired,
};
const mapStateToProps = store => ({
  filterContacts: selectors.getFilterContacts(store),
});
const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactsActions.addContact(data)),
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
