import * as types from '../actions/actionTypes';
import { Action, Cards } from '../types';
import testDeck from '../assets/testDecks';

const initialState = {
  deckName: 'Test',
  currentCardIndex: 0,
  cards: [
    {
      card: 1,
      front: 'What is vertical scaling?',
      back: 'Vertical scaling takes place through an increase in the specifications of an individual resource.',
      keep: true,
    },
    {
      card: 2,
      front: 'What is horizontal scaling?',
      back: 'Horizontal scaling takes place through duplicating host machine as needed.',
      keep: true,
    },
    {
      card: 3,
      front: 'What is ACID?',
      back: 'Atomicity, Consistency, Isolation, Durability',
      keep: true,
    },
  ],
};

const flashCardsReducer = (state = initialState, action: Action) => {
  let newCards: Cards[];
  let newIndex: number;

  switch (action.type) {
    case types.UPDATE_DECK:
      newCards = testDeck[action.payload];

      newIndex = 0;
      return {
        currentCardIndex: newIndex,
        deckName: action.payload,
        cards: newCards,
      };

    case types.NEXT_CARD:
      newIndex =
        state.currentCardIndex === state.cards.length - 1
          ? 0
          : state.currentCardIndex + 1;
      console.log(newIndex, 'new index');

      return {
        ...state,
        currentCardIndex: newIndex,
      };

    case types.PREV_CARD:
      newIndex =
        state.currentCardIndex === 0
          ? state.cards.length - 1
          : state.currentCardIndex - 1;

      return {
        ...state,
        currentCardIndex: newIndex,
      };

    default: {
      return state;
    }
  }
};

export default flashCardsReducer;
