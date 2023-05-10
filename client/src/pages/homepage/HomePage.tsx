import React from 'react';
import DeckContainer from './containers/DeckContainer';

const HomePage = () => {
  return (
    <div id='homepage' className='pages'>
      <div id='nav-bar'>
        <strong>Mega Marketable</strong>
      </div>
      <DeckContainer />
    </div>
  );
};

export default HomePage;
