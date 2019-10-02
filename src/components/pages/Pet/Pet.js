import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';
import PetsDB from '../../../db/pets.json';
import * as routes from '../../../constants/routes';

const Pet = ({ location, history }) => {
  const getCurrentPet = () => {
    const currentPetId = location.pathname.split('/')[2];
    const currentPet = PetsDB.find(pet => pet.id === currentPetId);
    return currentPet || history.push('/error');
  };

  const handleGoBack = () => {
    const { state } = location;
    if (state) {
      return history.push(state.from.pathname);
    }
    return history.push(routes.PETS);
  };

  const pet = getCurrentPet();
  return (
    <div className={styles.petContainer}>
      <button
        type="button"
        className={styles.buttonReturn}
        onClick={handleGoBack}
      >
        ← Return
      </button>
      <h2>All about {pet.name}</h2>
      <div className={styles.petWrapper}>
        <img className={styles.petImage} src={pet.image} alt={pet.name} />
        <div className={styles.petInfoWrapper}>
          <div>
            <b>Age:</b> {pet.age}
          </div>
          <div>
            <b>Gender:</b> {pet.gender}
          </div>
          <div>
            <b>Color:</b> {pet.color}
          </div>
          <div>
            <b>Breed:</b> {pet.breed}
          </div>
        </div>
      </div>
      <div className={styles.description}>{pet.description}</div>
    </div>
  );
};

Pet.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pet;
