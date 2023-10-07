import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState("")
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('form submitted')
        setName("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className='field'>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <button disabled={!name} type='submit'> Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Form