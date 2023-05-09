// import React from 'react';
// import { Link } from 'react-router-dom';
// import Deck from './containers/Deck.tsx';
import DeckContainer from './containers/DeckContainer.tsx';
import { useNavigate } from 'react-router-dom';



function HomePage() {
  


  return (
    <div id='homepage-page' className='pages'>
      <div id='nav-bar'>navbar component could go here</div>
      <DeckContainer />
    </div>
  )
}

export default HomePage
