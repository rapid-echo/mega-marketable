import React from 'react';
import DeckContainer from './containers/DeckContainer';

const HomePage = () => {
  return (
    <div id='homepage-page' className='pages'>
      <div id='nav-bar'>navbar component could go here</div>
      <DeckContainer />
    </div>
  );
};

export default HomePage;
