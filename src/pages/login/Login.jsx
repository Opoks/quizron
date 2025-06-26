import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const[email,setEmail]=useState('')
    const[queslink,setQueslink]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)
    const[empty,setEmpty]=useState(false)

    const emaill='john@gmail.com';
    const pass='123456'

    function logg(){
       if(email===emaill&&password===pass){setQueslink('/addQuestions')

       }else if(email===''&&password===''){setEmpty(true)
        setError(false)
       }else{setError(true)};
        
        // setEmail('')
        // setPassword('')
    }
  return (
    <div className='login'>
        <h1>LOGIN</h1>
        <div className="login-input">
            <input type="email" title='john@gmail.com' placeholder='Enter email' value={email} onChange={(e)=>setEmail(()=>e.target.value)}/>
             {error?(<p className='msg'>incorrect email</p>):empty?(<p className='msg'>please enter email</p>):''}
            <input type="password" title='123456' placeholder='Enter password' value={password} onChange={(e)=>setPassword(()=>e.target.value)}/>
             {error?(<p className='msg'>incorrect password</p>):empty?(<p className='msg'>please enter password</p>):''}
            <button onClick={()=>logg()}><Link  to={queslink}>LOGIN</Link ></button>
        </div>
    </div>
  )
}

export default Login