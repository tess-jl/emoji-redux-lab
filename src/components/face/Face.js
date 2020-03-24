import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';
import { getFace } from '../../selectors/moodSelectors';

const Face = () => {
  const emojiFace = useSelector(getFace);

  return (
    <p className={styles.Face}>
      {emojiFace}
    </p>
  );
};

export default Face;
