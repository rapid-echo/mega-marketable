import { useState, useEffect } from 'react';
import { FlashCardProps } from '../../../types';
import React from 'react';

function FlashCard(props: FlashCardProps) {
  return (
    <div className='flashcard' onClick={props.handleClick}>
      <p>
        {props.index + 1} of {props.cards.length}
      </p>
      {props.cards[props.index][props.display]}
    </div>
  );
}

export default FlashCard;
