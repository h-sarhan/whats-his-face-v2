import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import InputImage from './components/InputImage/InputImage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <InputImage />
      <ImageLinkForm />
    </div>
  );
}

export default App;
