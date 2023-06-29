import { useState } from 'react';
import phrases from './assets/phrases.json'
import { getRandomNumber } from './utils/getRandom'
import Phrase from './components/Phrase/Phrase';
import Button from './components/Button/Button';

import './App.css';


const background = ['/fondo3.jpg', '/fondo4.png', '/fondo1.jpg', '/fondo2.jpg'];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => background[getRandomNumber(background.length -1)];

  const [phraseObject, setphraseObject] = useState(getRandomPhrase());
  
  const [backgrounds, setbackgrounds] = useState(getRandomBackground());
  
  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    while(newPhrase.phrase === phraseObject.phrase){
      newPhrase = getRandomPhrase();
    }
    setphraseObject(newPhrase);
  };
 

  const changeBackground = () => {
    let newBackground = getRandomBackground();
    while(newBackground === backgrounds){
      newBackground = getRandomBackground();
    }
    setbackgrounds(newBackground);
  }
  const handlerClick = () => {
    changeBackground();
    changePhrase();
  }

  return (
    <>
      <div className='container_app' style={{backgroundImage: `url("${backgrounds}")` }}>
        <h1 className = 'animate__fadeInDown'>Galleta de la Fortuna</h1>
        <Phrase phrase={phraseObject.phrase} />
        <p className='animate__fadeInUpBig'>
          Author:  <mark> {phraseObject.author} </mark>
        </p>

        <div className='btn_container'>
          <Button handlerClick={handlerClick}/>
        </div>
      </div>
     
    </>
  )
}

export default App;
