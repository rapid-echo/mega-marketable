import { useNavigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/action';
import Deck from '../components/Deck';
import { AppDispatch } from '../../../store';
import { DeckContainerProps } from '../../../types';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateDeck: (deckName: 'SDI' | 'Algos' | 'Self') =>
    dispatch(actions.updateDeckActionCreator(deckName)),
});

const DeckContainer = (props: DeckContainerProps) => {
  const navigate = useNavigate();
  //const decks = ['SDI','Algos', 'Self'];

  const handleClick = (deckName: 'SDI' | 'Algos' | 'Self'): void => {
    console.log(deckName);
    props.updateDeck(deckName);
    navigate('/flashcards');
  };

  //const decksArray = decks.map((el: 'SDI'|'Algos'| 'Self') => <Deck name={el} handleClick={handleClick} />)

  return (
    <div id='deck-container'>
      <Deck name={'SDI'} handleClick={handleClick} />
      <Deck name={'Algos'} handleClick={handleClick} />
      <Deck name={'Self'} handleClick={handleClick} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(DeckContainer);
