import React from 'react'
import { useUser, UserProvider } from './Context'


const LoggedInUser=()=>{
    return (
        <>
        <p>Hello</p>
        </>
    )
}

const Header=()=>{
    return (
        <>
        <h2>Blog App</h2>
        <LoggedInUser/>
        </>
    )
}

const Page=()=>{
    return (
        <>
        <h2>What is Lorem ipsummm??</h2>
        <p>Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd Lorem   Loremdhdhd dhndjd kmsmw  vvkedieb lfkf fjfj k,dkd jdjdj djdkd</p>
        <p>Written by </p>
        </>
    )
}



export const App2 = () => {
  return (
    <div>
        <Header/>
        <Page/>
    </div>
  )
}
export default function Root11(){
    return (
        <UserProvider>
        <App2/>
        </UserProvider>
    )
}