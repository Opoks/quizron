import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Doc from '../document/Doc'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import './Header.css'



const Header = () => {
  const[isMenu,setIsMenu]=useState(false)
  const[isClose,setIsClose]=useState(false)
  function menuu(){
     setIsMenu(true)
     setIsClose(false)
  }
  function closee(){
     setIsClose(true)
     setIsMenu(false)
  }
  return (
    <div className='header'>
        <h3><Link to='/'> Quiz-App</Link></h3>
        <div className={isMenu?"around-menu1":''} onClick={()=>setIsMenu(false)}>
        <ul className={isMenu?'menu1':isClose?'ul':'ul'} onClick={()=>setIsMenu(true)}>
            <li><Link to='/'>Quiz</Link></li>
            <li><Link to='/login'>Add Questions</Link></li>
            <li><Link to='/questions'> Questions</Link></li>
            <li><Link to='/documentation'>Doc.</Link></li>
        </ul>
        </div>
       <div className='menu' onClick={()=>menuu()}>{isMenu?'':(<FiMenu/>)}</div> 
       <div className={isMenu?'close':''} onClick={()=>closee()}>{isMenu?(<IoClose/>):''}</div> 

    </div>
  )
}

export default Header