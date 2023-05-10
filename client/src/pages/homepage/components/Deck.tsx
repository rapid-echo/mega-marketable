import React from 'react';
import { DeckProps } from '../../../types';


function Deck(props: DeckProps) {
  return (
    <button className='deck'>
      {props.title}
    </button>
  )
}

export default Deck;
