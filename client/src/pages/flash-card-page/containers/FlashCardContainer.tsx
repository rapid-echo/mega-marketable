import React from 'react';
import { Link } from 'react-router-dom';
import FlashNavButton from '../components/FlashNavButton';
import FlashCard from './FlashCard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  deckName: state.flashcards.deckName,
  cards: state.flashcards.cards
})

function FlashCardContainer() {
  return (
    <div>
      <FlashCard />
      
    </div>
  )
}

export default connect(mapStateToProps)(FlashCardContainer);
