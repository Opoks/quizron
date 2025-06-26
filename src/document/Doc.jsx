import React from 'react'
import './Doc.css'
const Doc = () => {
  return (
    <>
    <div className='doc'>
        <h2>About Developer</h2>
        <p>Name: John Opoku</p>
        <p>Year published: 2025</p>
        <p>This is just to build my portfolio.</p>
        <p>I have a degree in IT and a graduate from <br /> Ghana Communication Technology University.</p>

        <br />
        <h2>Login Details</h2>
        <p>email: john@gmail.com</p>
        <p>password: 123456</p>
        NOTE: You can only access add question page <br />
        to add,edit and delete questions. Like an admin page.
        <br />
        <br />
        <h2>Something to know...</h2>
        <p>.This is only the frontend and has no database to store info.</p>
        <p>.Everything is stored on the localstorage (Your browser's storage)</p>

        <br />
        <h2>Things you can do...</h2>
        <p>.Login to access add question page.</p>
        <p>.Answer questions</p>
        <p>.Add your own questions and options</p>
        <p>.Can edit and delete questions and options</p>
        <p>.Get back to default questions by clicking on default button.</p>
        <p>.See your score</p>
        <p>.See the answers you selected. If green, correct and red means wrong</p>
        <p>.Click retry to try quiz again</p>
      
    </div>
   
    </>
  )
}

export default Doc