export type DeckProps = {
  title: string;
  onClick: (deckName: string) => void;
};

export type Action = {
  type: string;
  payload: 'SDI' | 'Algos' | 'Self';
};

export type Cards = {
  card: number;
  front: string;
  back: string;
  keep: boolean;
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
// export type LoginProps = {
//     username: string,
//     password: string
// }
