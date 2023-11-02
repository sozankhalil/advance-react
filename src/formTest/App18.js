import React from 'react'
import FeedbackForm from './feedbackForm'

function App18() {
    const handleSubmit=()=>{
        console.log('form submitted')
    }
  return (
    <div>
        <FeedbackForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default App18