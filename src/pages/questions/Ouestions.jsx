import React from 'react'
import './Questions.css'
const Ouestions = ({addd}) => {
  
  return (
    <div className='only-questions'>
        <h1>All Questions</h1>
        {addd.map((add,index)=><div><h3>({index +1}) {add.question}</h3></div>)}
    </div>
  )
}

export default Ouestions