import React from 'react';
import './ImageLinkForm.css';

export default function ImageLinkForm() {
  return (
    <div className="form--container">
      <form className="form">
        <input
          type="text"
          name="image-link"
          id="image-link"
          className="image-link"
          placeholder="Place your image link here"
        />
        <button type="submit" className="btn btn--detect">
          Detect
        </button>
      </form>
    </div>
  );
}
