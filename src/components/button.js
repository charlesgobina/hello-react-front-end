import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGreeting } from '../redux/thunk';
import './button.css';

const Button = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <button type="button" className="greetBtn" onClick={() => dispatch(getGreeting())}>Greet</button>
  );
};

export default Button;
