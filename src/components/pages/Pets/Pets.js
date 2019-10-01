import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pets.module.css';
import petsDB from '../../../db/pets.json';

const Navigation = ({ match, location }) => {
  //   const { url } = match;
  return (
    <>
      <h2 style={{ margin: '40px 0 40px 50px' }}>Available pets</h2>
      <div className={styles.petsContainer}>
        {petsDB.map(pet => (
          <Link
            className={styles.petContainer}
            key={pet.id}
            to={{
              pathname: `${match.url}/${pet.id}`,
              state: { from: location },
            }}
          >
            <img className={styles.petImage} src={pet.image} alt={pet.name} />
            <div className={styles.petName}>{pet.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Navigation;
