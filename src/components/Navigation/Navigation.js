import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink
          exact
          to={routes.HOME}
          className={styles.navlink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.PETS}
          className={styles.navlink}
          activeClassName={styles.navLinkActive}
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={routes.ABOUT}
          className={styles.navlink}
          activeClassName={styles.navLinkActive}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
