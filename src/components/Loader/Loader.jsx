import React from 'react';
import css from './Loader.module.css';

import { Audio } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <div className={css.Loader}>
      {isLoading && <Audio ariaLabel="loading" wrapperStyle wrapperClass />}
    </div>
  );
};

export default Loader;
