import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './PhoneBook.module.css';
import Error from '../Error/Error';
import '../../transition/pnotify-style.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import { getToLocalStorage } from '../../services/localStorage';


class PhoneBook extends Component {
  static propTypes = {
    contactsLength: PropTypes.number.isRequired,
    filterContactsLength: PropTypes.number.isRequired,
    setContactsWithLocalStorage: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { setContactsWithLocalStorage } = this.props;
    const storage = getToLocalStorage('contacts');
    if (storage !== null) setContactsWithLocalStorage(storage);
  }

  render() {
    const { contactsLength, filterContactsLength } = this.props;
    return (
      <section className={styles.section}>
        <h2 className={styles.title}> Phonebook </h2>
        <ContactForm />
        <h2 className={styles.title}>Contact list</h2>
        {contactsLength > 1 && <Filter />}
        {contactsLength > 0 && <ContactList />}
        {contactsLength < 1 && <Error>Contact list is empty!</Error>}
        {filterContactsLength < 1 && contactsLength > 0 && (
          <Error>Contact not found!</Error>
        )}
      </section>
    );
  }
}

const mapStateToProps = store => ({
  contactsLength: selectors.getContactsLength(store),
  filterContactsLength: selectors.getFilterContactsLength(store),
});
const mapDispatchToProps = dispatch => ({
  setContactsWithLocalStorage: data =>
    dispatch(contactsActions.setContactsWithLocalStorage(data)),
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
