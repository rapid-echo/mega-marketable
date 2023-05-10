import * as types from './actionTypes.ts';


export const updateDeckActionCreator = (DeckName: "SDI" | "Algos" | "Self") => ({
  type: types.UPDATE_DECK,
  payload: DeckName,
})

export const nextCardActionCreator = () => ({
    type: types.NEXT_CARD
})