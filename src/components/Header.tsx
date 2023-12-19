"use client"
import React from 'react'
import { useState } from 'react'
function Header() {
    const [value,setvalue]=useState(0);
  return (

       
   <div className='flex flex-col items-center justify-center' style={{height:"100vh",background:'gray'}}>
    <h1 style={{background:"pink",textAlign:"center",padding:"10px",borderRadius:"20px"}}>Counter</h1>
    <div>
    <button style={{padding:"20px",background:"blue",borderRadius:"20px"}} onClick={()=>setvalue(value+1)}>Increament</button>
    <span style={{padding:"20px",background:"green",color:"whitesmoke",borderRadius:"20px",marginLeft:"10px"}} >{value}</span>
    <button style={{padding:"20px",background:"blue",borderRadius:"20px",marginLeft:"10px"}} onClick={()=>setvalue(value-1)}>Decrement</button>
    </div>
   
    <div>
    <button  style={{padding:"20px",background:"orange",borderRadius:"20px",marginTop:"10px", }} onClick={()=>setvalue(0)}>reset</button>
    </div>
   </div>



    
  )
}

export default Header