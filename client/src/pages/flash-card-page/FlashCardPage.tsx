import React from 'react';
import FlashCardContainer from './containers/FlashCardContainer';
import { useNavigate } from 'react-router-dom';

function FlashCardPage() {
  const navigate = useNavigate();
  return (
    <div id='flash-card-page' className='pages'>
      <div id='nav-bar'>
        <strong>Mega Marketable</strong>
        <button id='back-home-button' onClick={() => navigate('/home')}>
          Home
        </button>
      </div>
      <FlashCardContainer />
    </div>
  );
}

export default FlashCardPage;
