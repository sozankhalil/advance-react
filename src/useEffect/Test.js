import React, { useEffect, useState } from 'react'

function Test() {
    const [toggle,setToggle]=useState(false)
    function handleClick(){
        setToggle(!toggle)
    }
    useEffect(()=>{
  document.title =toggle?'welcome to the little lemon':'using useeffect'
    },[]);
  return (
    <div>
        <h1>using the useEffect</h1>
        <button onClick={handleClick}>{toggle?'hide message':'toggle message'}</button>
        {toggle && <h2>welcome to little lemon</h2>}
    </div>
  )
}

export default Test