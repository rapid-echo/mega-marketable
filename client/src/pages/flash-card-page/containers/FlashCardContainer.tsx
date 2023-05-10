import FlashNavButton from '../components/FlashNavButton';
import FlashCard from './FlashCard';
import { connect } from 'react-redux';
import PageButton from '../components/PageButton';
import * as actions from '../../../actions/action';
import { FlashCardContainerProps, Cards } from '../../../types';
import { AppDispatch, RootState } from '../../../store';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state: any) => ({
  deckName: state.flashcards.deckName as string,
  cards: state.flashcards.cards as Cards[],
  currentCardIndex: state.flashcards.currentCardIndex as number,
  display: state.flashcards.display,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  prevCard: () => dispatch(actions.prevCardActionCreator()),
  nextCard: () => dispatch(actions.nextCardActionCreator()),
  updateDisplay: () => dispatch(actions.updateDisplayActionCreator()),
});

function FlashCardContainer(props: FlashCardContainerProps) {
  // const navigate = useNavigate();

  return (
    <div id='flash-card-container'>
      {/* <button id='back-home-button' onClick={() => navigate('/home')}>
        Back
      </button> */}
      <p id='deck-title'>{props.deckName}</p>
      <FlashCard
        index={props.currentCardIndex}
        cards={props.cards}
        handleClick={props.updateDisplay}
        display={props.display}
      />
      <div id='left-right'>
        <FlashNavButton handleClick={props.prevCard} text={'<'} />
        <FlashNavButton handleClick={props.nextCard} text={'>'} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardContainer);
