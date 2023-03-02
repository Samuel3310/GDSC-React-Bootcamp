import React from 'react'
import { useState } from 'react'

const FeedbackItem = () => {
    const {rating, setRating} = useState(7)
    const handleClick = ()=>{
         setRating((prev) =>{
        return prev + 1;
    })
    }

 
  return (
    <div className='card'>

        <div className="num-display">{rating}</div>
        <div className="text-display">
            This is an example of state in react
        </div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default FeedbackItem