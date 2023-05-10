import { DeckProps } from '../../../types';

const Deck = (props: DeckProps) => {
  return (
    <button className='deck' onClick={() => props.handleClick(props.name)}>
      {props.name} Questions
    </button>
  );
};

export default Deck;
