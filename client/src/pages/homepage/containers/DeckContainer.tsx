// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/action';
import { Action } from '../../../types';
import Deck from '../components/Deck';

const mapDispatchToProps = (dispatch) => ({
  updateDeck: (deckName: "SDI" | "Algos" | "Self") => dispatch(actions.updateDeckActionCreator(deckName)),
})

function DeckContainer() {
  const navigate = useNavigate()
  const [decks, setDecks] = useState(['SDI Questions','Algorithm Questions', 'Self Questions']);


  const handleClick = (DeckName: string):void => {
    /////update state's currently selected deck to be deck name
    navigate('/flashcards');
  }

  const decksArray = decks.map(el=>{
    return <Deck title={el} handleClick={handleClick} />
  }) 

  return (
    <div id='deck-container'>
      {decksArray}
      {/* <Deck title ={'SDI Questions'} onClick={handleClick}/>
      <Deck title={'Algorithm Questions'} onClick={handleClick}/>
      <Deck title={'Self Questions'} onClick={handleClick}/> */}
    </div>
  )
}

export default connect(mapDispatchToProps)(DeckContainer);
