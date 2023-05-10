import { useState } from 'react';
import { FlashCardProps } from '../../../types';
import React from 'react';

function FlashCard(props: FlashCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className='flashcard' onClick={() => handleClick()}>
      <p>
        {props.index + 1} of {props.cards.length}
      </p>
      {showAnswer
        ? props.cards[props.index].back
        : props.cards[props.index].front}
    </div>
  );
}

export default FlashCard;
