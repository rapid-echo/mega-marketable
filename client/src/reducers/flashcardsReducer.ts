import * as types from '../actions/actionTypes';
import { Action, Cards } from '../types';
import testDeck from '../assets/testDecks';

const initialState = {
  deckName: '',
  currentCardIndex: 0,
  cards: [{card: 1, front: 'question 1', back: 'answer 1', keep: true}],
}

const flashCardsReducer = (state = initialState, action: Action) => {
  let newCards: Cards[];
  let newIndex: number;
  
  switch (action.type) {
    case types.UPDATE_DECK:
    newCards = testDeck[action.payload]
    return {
      deckName: action.payload,
      cards: newCards
    }

    case types.NEXT_CARD:
      console.log(state.cards.length, 'up')
      console.log(state.cards)
    newIndex = state.currentCardIndex === state.cards.length - 1 ? 0 : state.currentCardIndex + 1;
    console.log(newIndex, 'new index')
   
    return{
      ...state,
      currentCardIndex: newIndex
    }

    case types.PREV_CARD: 
    console.log(state.cards.length, 'reduction')
    console.log(state.cards)
    newIndex = state.currentCardIndex === 0 ? state.cards.length - 1 : state.currentCardIndex - 1;
    

    return {
      ...state,
      currentCardIndex: newIndex

    }

    default: {
      return state;
    }
  }
}

export default flashCardsReducer;
