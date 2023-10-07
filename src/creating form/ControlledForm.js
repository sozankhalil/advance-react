import React, { useState } from 'react'

const ControlledForm = () => {
    const [score,setScore]=useState("10")
    const [comment,setComment]=useState('')
    const handleSubmit=(e)=>{
   e.preventDefault()
   if(Number(score) <=5 && comment.length <=10 ){
    alert("please explain why.....")
    return;
   }
   console.log('form submitted')
   setScore('10')
   setComment('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback form</h2>
                <div className='field'>
            <label>Score: {score}*</label>
            <br/>
            <input type='range' min='0' max='10' value='10' onChange={(e)=>setScore(e.target.value)}/>
                </div>
                <div>
                    <label>Comment:</label>
                    <br/>
                    <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
                </div>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default ControlledForm