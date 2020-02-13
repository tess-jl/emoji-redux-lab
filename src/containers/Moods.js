import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/taskActions';
import { useSelector, useDispatch } from 'react-redux';


const Moods = () => {
  const { coffees, snacks, naps, studies } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleSelection = task => {
    dispatch(task);
  };

  return (
    <>
      <Controls>
        <button onClick={() => handleSelection(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => handleSelection(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => handleSelection(takeNap())}>naps - {naps}</button>
        <button onClick={() => handleSelection(study())}>studies - {studies}</button>
      </Controls>
      <Face /> 
    </>
  );
};

export default Moods; 
