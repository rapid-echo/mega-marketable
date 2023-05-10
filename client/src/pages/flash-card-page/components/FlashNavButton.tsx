import { FlashNavButtonProps } from '../../../types';
import React from 'react';

function FlashNavButton(props: FlashNavButtonProps) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}

export default FlashNavButton;
