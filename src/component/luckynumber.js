import {Fragment, useState} from "react";

const luckyNumber = Math.round(Math.random()*10)

export default function Game(){

    const [number, setnumber] = useState() 
    const [attempt, setattempt] = useState(1)

    function takeInput(event){
        setnumber(event.target.value)
    }

    function compareNumber(){
        setattempt(attempt + 1)
        if (attempt>=5){
            alert('You have completed your maximum attempts')
        }
        if (number === luckyNumber){
            alert('Congrats u have won the game!!! ' + attempt + " attempts")
        }else if (number > luckyNumber) {
            alert('Your number is greater than luckynumber')
        }else {
            alert('Your number is smaller than lucky number')
        }
    }

    return(
        <Fragment>
         <h1>Guess the lucky number</h1>
         <input onChange={takeInput} type="number" placeholder="type number"></input>
         <button onClick={compareNumber} type="submit">Submit</button>
        </Fragment>
    )
}