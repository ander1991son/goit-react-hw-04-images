import React, { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onChange }) => {
  const [value, setValue] = useState('');

  return (
    <header className={css.searchbar}>
      <form className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.button}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          value={value}
          placeholder="Search images and photos"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Searchbar;

///////////////////////////////////                codigo de abajo original
// import React from 'react';
// import css from './Searchbar.module.css';
// const Searchbar = ({ value, onChange }) => {
//   return (
//     <header className={css.searchbar}>
//       <form className={css.form}>
//         <button type="submit" className={css.button}>
//           <span className={css.button}>Search</span>
//         </button>

//         <input
//           className={css.input}
//           type="text"
//           value={value}
//           placeholder="Search images and photos"
//           onChange={onChange}
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;
