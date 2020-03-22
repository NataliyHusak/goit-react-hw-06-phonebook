import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import styles from './Error.module.css';

const Error = ({ children }) => {
  return (
    <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
      <div className={styles.error}>
        <span className={styles.errorText}>{children}</span>
      </div>
    </CSSTransition>
  );
};
Error.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Error;


