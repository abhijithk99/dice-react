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
  function incrementCount1(){
    setIndex(Math.floor(Math.random() * img_array.length))
    if(i===1){
      asd1();
    }
    else{
      asd2();
      
    } 
  };

  function reset(){
    setIndex(0)
    setCurrentscore1(0)
    setCurrentscore2(0)
  };

  const [currentScore1 , setCurrentscore1] = useState(dice)
  function asd1(){
    setCurrentscore1(currentScore1 + dice + 1)
    if(currentScore1 >= 25){
      alert("player 1 won")
    }
    setI(2)

  };

  const [currentScore2 , setCurrentscore2] = useState(dice)
  function asd2(){
    setCurrentscore2(currentScore2 + dice + 1)
    if(currentScore2 >= 25){
      alert("player 2 won")
    }
    setI(1)
  };
  
  return (
    <>
    <button className='Btn-throw' onClick={() =>{incrementCount1()}}>Throw dice</button>
    <button className='Btn-reset' onClick={() =>{reset()}}>Reset</button>

    <div className='player1'><h3>PLAYER 1</h3>
    <h1 className='score1'>{currentScore1}</h1>
    </div>

    <div className='player2'><h3>PLAYER 2</h3>
    <h1 className='score2'>{currentScore2}</h1>
    </div>

    <div className='dice-img'>
    <img src={img_array[dice]}/>
    </div>

    </>
  )
}
