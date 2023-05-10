import { FlashNavButtonProps } from '../../../types';

function FlashNavButton(props: FlashNavButtonProps) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}

export default FlashNavButton;
