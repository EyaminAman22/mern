import React, { useContext, useState } from 'react'

const App = () => {
  let [title,setTitle]=useState("Set a number for the User")
  let [alertmsg,setAlertmsg]=useState("")
  let [qnum,setQnum]=useState("")
  let [count,setCount]=useState(5)
  let [qnumtwo,setQnumtwo]=useState("")
  let [hide,sethide]=useState(true)

    // computer Part
  let HandleChange=(e)=>{
    setQnum(e.target.value)
  }
  // Computer part
  let HandleClick=()=>{ 
    if(qnum==""){
      setAlertmsg("enter something")
    }
    else{
      if(!(qnum-12)){
        setAlertmsg("enter a number")
      }
      else{
        if(qnum>9){
          setAlertmsg("enter a number between 1 to 9")
        }
        else{
          console.log(qnum)
          setTitle("User guess the number")
          setAlertmsg("")
          sethide(false)
        }
      }
    }
  }
  // user Part
  let HandleChangetwo=(e)=>{
    setQnumtwo(e.target.value)
    
  }
  // User Part
  let HandleClicktwo=()=>{
    count-- 
    setCount(count)
    
     if(count>0 || qnumtwo==qnum){
      if(qnumtwo==""){
        setAlertmsg("enter something")
      }
      else{
        if(!(qnumtwo-12)){
          setAlertmsg("enter a number")
        }
        else{
          if(qnumtwo>9){
            setAlertmsg("enter a number between 1 to 9")
          }
          else{
            if(qnum==qnumtwo){
              setAlertmsg("Secret Number is found")
              setTitle("User Wins the Match")
            }
            else if(qnum>qnumtwo){
              setAlertmsg("Secret Number is Bigger")
            }
            else{
              setAlertmsg("Secret Number is Smaller")
            }
          }
        }
      }
    }
    else if(count==0){
      sethide(true)
      setTitle("Computer has Won the Match")
      setAlertmsg("")
    }
    else{
      alertmsg("error occurred")
    }
  }
  
  return (
    <>
    <h1>{title}</h1>
    <h2 style={{display:hide?'none':'block'}}>{count}</h2>
    <input style={{display:hide?'inline-block':'none'}} onChange={HandleChange} type="text"/>
    <button style={{display:hide?'inline-block':'none'}} onClick={HandleClick} >Submit</button>
    <input style={{display:hide?'none':'inline-block'}} onChange={HandleChangetwo} type="text"/>
    <button style={{display:hide?'none':'inline-block'}} onClick={HandleClicktwo} >Check</button>
    <h2>{alertmsg}</h2>

    </>
  )
}
export default App