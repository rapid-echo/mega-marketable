import * as types from '../actions/actionTypes';
import { Action, Cards } from '../types';
import testDeck from '../assets/testDecks';

const initialState = {
  deckName: '',
  currentCardIndex: 0,
  cards: [],
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
    if (state.currentCardIndex === state.cards.length - 1) {
      newIndex = 0;
    } else {
      newIndex = state.currentCardIndex++;
    }
   
    return{
      ...state,
      currentCardIndex: newIndex
    }

    default: {
      return state;
    }
  }
}

export default flashCardsReducer;
