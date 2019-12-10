import React from 'react';
import placeholder from './jerry-seinfeld-medium.jpg';
import './InputImage.css';

export default function InputImage() {
  return <img src={placeholder} alt="placeholder" className="placeholder-img" />;
}
