import React, { useReducer } from 'react'

const reducer=(state,action)=>{
if(action.type==='buy-ingridents') return {money:state.money-10};
if(action.type==='sell-a-meal') return {money:state.money+10};
return state
}
function App8() {
   const initialState={money:100};
   const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>Wallet:{state.money}</h1>
        <button onClick={()=>dispatch({type:'buy-ingridents'})}>shopping for vegies!</button>
        <button onClick={()=>dispatch({type:'sell-a-meal'})}>serve a meal to the customer</button>
        
    </div>
  )
}

export default App8