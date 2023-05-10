import React from 'react';
import { Link } from 'react-router-dom';
import { FlashCardProps } from '../../../types';

function FlashCard(props: FlashCardProps) {
  return (
    <div>
      index: {props.index}
      <br />
      {/* cards: {props.cards} */}
      {/* <br /> */}
      deckName: {props.deck}
      <br />
      I am a flash card
    </div>
  )
}

export default FlashCard
