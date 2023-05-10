import React from 'react';
import {Link, Router} from 'react-router-dom';
import ButtonContainer from './containers/ButtonContainer';
import FlashCardContainer from './containers/FlashCardContainer';

function FlashCardPage() {
  return (
    <div id="flash-card-page" className='pages'>
      <FlashCardContainer />
    </div>
  )
}

export default FlashCardPage
