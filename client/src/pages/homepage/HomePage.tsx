import React from 'react';
import { Link } from 'react-router-dom';
import Deck from './containers/Deck.tsx';
import { useNavigate } from 'react-router-dom';



function HomePage() {
  const navigate = useNavigate()

  const handleClick = (deckName: string) => {
    /////
    navigate('/flashcards')

  }
  return (
    <div>
      <Deck title ={'SDI Questions'} onClick={handleClick}/>
      <Deck/>
      <Deck/>
      <Deck/>
    </div>
  )
}

export default HomePage
