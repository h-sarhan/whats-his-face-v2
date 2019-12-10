import React from 'react';
import LogoIMG from './default.png';
import './Logo.css';

export default function Logo() {
  return <img className="logo" src={LogoIMG} alt="site logo" />;
}
