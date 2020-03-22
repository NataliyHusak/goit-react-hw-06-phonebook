import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import pop from '../../transition/pop.module.css';
import styles from './Filter.module.css';
import { ALL_ID } from '../../services/constants';
import filterActions from '../../redux/filter/filterActions';
import * as selectors from '../../redux/selectors';

const Filter = ({ input, handleChange }) => {
  const handleOnChange = e => {
    handleChange(e.target.value);
  };
  const handleOnClean = e => {
    handleChange('');
  };
  return (
    <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
      <section className={styles.section}>
        <form className={styles.filter}>
          <label htmlFor={ALL_ID.htmlFor} className={styles.title}>
            <h3>Fined contact by name</h3>
            <span className={styles.inputWrap}>
              <input
                className={styles.input}
                onChange={handleOnChange}
                value={input}
                name="input"
                type="text"
                placeholder="Input contact to find"
              />
              {input.length > 0 && (
                <button
                  className={styles.formInputBtn}
                  type="button"
                  onClick={handleOnClean}
                >
                  Delete
                </button>
              )}
            </span>
          </label>
        </form>
      </section>
    </CSSTransition>
  );
};
Filter.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
const mapStateToProps = store => ({
  input: selectors.getFilter(store),
});
const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(filterActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
