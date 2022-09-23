import React, { useState } from 'react'
import img1 from './dice1.png'
import img2 from './dice2.png'
import img3 from './dice3.png'
import img4 from './dice4.png'
import img5 from './dice5.png'
import img6 from './dice6.png'

export default function Btn() {

  const img_array = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
    
];

  const [i , setI] = useState(1)
  const [dice , setIndex] = useState(0)
  const [currentScore1 , setCurrentscore1] = useState(0)
  const [currentScore2 , setCurrentscore2] = useState(0)

  const btnRoll = () => {
    var diceFace = Math.floor(Math.random() * img_array.length);
    setIndex(diceFace)

    if(i===1){
      setI(2)
      return setCurrentscore1(currentScore1 + diceFace + 1);
    }
    else{
      setI(1)
      return setCurrentscore2(currentScore2 + diceFace + 1
        );
    } 

  };

  const resetBtn = () => {
    setI(1)
    setIndex(0)
    setCurrentscore1(0)
    setCurrentscore2(0)
  };

  return (
    <>

    <button className='Btn-throw' onClick={btnRoll}>Throw dice</button>
    <button className='Btn-reset' onClick={resetBtn}>Reset</button>

    <div className='player1'><h3>PLAYER 1</h3>
    <h1 className='score1'>{currentScore1}</h1>
    </div>

    <div className='player2'><h3>PLAYER 2</h3>
    <h1 className='score2'>{currentScore2}</h1>
    </div>

    <div className='dice-img'>
    <img src={img_array[dice]}/>
    <div id="winner1">{currentScore1 >= 25?(<h3>PLAYER 1 WON</h3>) : currentScore2 >= 25 ?(<h3>PLAYER 2 WON</h3>):null}</div>
    </div>

    </>
  )
}
