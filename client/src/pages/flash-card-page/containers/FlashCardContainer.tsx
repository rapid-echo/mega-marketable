import FlashNavButton from '../components/FlashNavButton';
import FlashCard from './FlashCard';
import { connect } from 'react-redux';
import PageButton from '../components/PageButton';
import * as actions from '../../../actions/action';
import { FlashCardContainerProps, Cards } from '../../../types';
import { AppDispatch, RootState } from '../../../store';

const mapStateToProps = (state: any) => ({
  deckName: state.flashcards.deckName as string,
  cards: state.flashcards.cards as Cards[],
  currentCardIndex: state.flashcards.currentCardIndex as number,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  prevCard: () => dispatch(actions.prevCardActionCreator()),
  nextCard: () => dispatch(actions.nextCardActionCreator()),
});

function FlashCardContainer(props: FlashCardContainerProps) {
  return (
    <div id='flash-card-container'>
      <p>{props.deckName}</p>
      <FlashCard index={props.currentCardIndex} cards={props.cards} />
      <div id='left-right'>
        <FlashNavButton handleClick={props.prevCard} text={'<'} />
        <FlashNavButton handleClick={props.nextCard} text={'>'} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardContainer);
