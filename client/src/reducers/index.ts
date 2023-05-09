import { combineReducers } from "@reduxjs/toolkit";
import flashCardsReducer from "./flashcardsReducer";

const reducers = combineReducers({
  flashcards: flashCardsReducer,
});


export default reducers;