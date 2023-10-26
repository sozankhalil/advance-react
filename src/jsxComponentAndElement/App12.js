import React from 'react'
import './App12.css'

const Button=({children,background})=>{
return (
    <>
    <button style={{background}}>{children}</button>
    </>
)
}

const Alert=({children})=>{
    return(
        <>
        <div className='overlay'/>
        <div className='alert'>{children}</div>
        </>
    )
}

function App12() {
  return (
    <div>
        <header>Little lemon restaurant</header>
    </div>
  )
}

export default App12