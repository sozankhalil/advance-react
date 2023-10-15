import React, { useState } from 'react'

function GoalForm (props){
const [formDate,setFormDate]=useState({goal:'', by:''})

function changeHandler(e){
setFormDate({...formDate,[e.target.name]:e.target.value})
}
function submitHandler(e){
e.preventDefault();
props.onAdd(formDate);
setFormDate({goal:'',by:''})
}
    return (
    <>
    <h1>My Little Lemon Goals</h1>
    <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formDate.goal} onChange={changeHandler}/>
        <input type='text' name='by' placeholder='By...' value={formDate.by} onChange={changeHandler}/>
        <button>Submit goal</button>
    </form>
    
    </>
    )
}

function ListOfGoals(props){
  return (
    <>
    <ul>
      {props.allGoals.map((g)=>(
        <li key={g.goal}><span>My goal is to {g.goal}, by {g.by}</span></li>
      ))}
    </ul>
    </>
  )
}




function App4() {
  const[allGoals,updateAllGoals]=useState([])
  function addGoal(goal){updateAllGoals([...allGoals,goal]) }
  return (
    <>
    <GoalForm onAdd={addGoal}/>
    <ListOfGoals allGoals={allGoals}/>
    </>
  )
}

export default App4