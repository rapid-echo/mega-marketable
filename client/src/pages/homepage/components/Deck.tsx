import React from 'react';
import { DeckProps } from '../../../types';

const Deck = (props: DeckProps) => {
  return (
    <button onClick={() => props.handleClick(props.name)}>
      {props.name} Questions
    </button>
  );
};

export default Deck;
