export type DeckProps = {
  name: 'SDI' | 'Algos' | 'Self';
  handleClick: (deckName: 'SDI' | 'Algos' | 'Self') => void;
};

export type DeckContainerProps = {
  updateDeck: (deckName: 'SDI' | 'Algos' | 'Self') => void;
};

export type Cards = {
  card: number;
  front: string;
  back: string;
  keep: boolean;
};

export type FlashCardContainerProps = {
  deckName: string;
  cards: Cards[];
  currentCardIndex: number;
  display: 'front' | 'back';
  prevCard: () => void;
  nextCard: () => void;
  updateDisplay: () => void;
};

export type FlashNavButtonProps = {
  handleClick: () => void;
  text: string;
};

export type PageButtonProps = null;

export type FlashCardProps = {
  index: number;
  cards: Cards[];
  display: 'front' | 'back';
  handleClick: () => void;
};

export type Action = {
  type: string;
  payload: 'SDI' | 'Algos' | 'Self';
};

export type Deck = {
  SDI: Cards[];
  Algos: Cards[];
  Self: Cards[];
};

export type LoginBodyType = {
  username: string;
  password: string;
};

export type LoginResponseType = {
  user: boolean;
};
