import { createContext, useContext, useState } from "react";

const UserContext =createContext()

export const UserProvider=({children})=>{
    const[user]=useState({
        name:'john',
        email:'john@gmail.com',
        dob:'1/1/2000'
    });
return (
    <>
<UserContext.Provider value={{user}}>

</UserContext.Provider>
</>
);
};

export const useUser=()=> useContext(UserContext);