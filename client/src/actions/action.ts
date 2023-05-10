import * as types from './actionTypes';

export const updateDeckActionCreator = (
  DeckName: 'SDI' | 'Algos' | 'Self'
) => ({
  type: types.UPDATE_DECK,
  payload: DeckName,
});

export const nextCardActionCreator = () => ({
  type: types.NEXT_CARD,
});

export const prevCardActionCreator = () => ({
  type: types.PREV_CARD,
});

export const updateDisplayActionCreator = () => ({
  type: types.UPDATE_DISPLAY,
});
