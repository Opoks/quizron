import { useEffect, useState } from 'react'
import data from './assets/data'
import './App.css'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Home from './pages/home/Home'
import Header from './header/Header'
import Login from './pages/login/Login'
import AddQuestions from './pages/add question/AddQuestions'
import Ouestions from './pages/questions/Ouestions'

import Doc from './document/Doc'

function App() {

  const [items, setItems] = useState(0)
  const [tab, setTab] = useState('')
  
  // const [score, setScore] = useState(0)
  const [tub, setTub] = useState('wrong')
  const [done, setDone] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [addd, setAdd] = useState(data)
  const [ques, setQues] = useState('')
  const [inp1, setInp1] = useState('')
  const [inp2, setInp2] = useState('')
  const [inp3, setInp3] = useState('')
  const [inp4, setInp4] = useState('')
  const [answer, setAnswer] = useState('')
  const [idd, setId] = useState('')
  
  useEffect(()=>{
    if(localStorage.getItem('quiz')!=null){
    let ad=JSON.parse(localStorage.getItem('quiz'))
      setAdd(ad.quiz)
  }},[])
  
  function save(ell){
    localStorage.setItem('quiz',JSON.stringify({quiz:ell}))
  }
 
function add() {
   if(idd===addd.length+1){
    let reeme=[...addd,{question:ques,options:[inp1,inp2,inp3,inp4],clicked:'',score:0,ans:answer,id:idd}]
  setAdd(reeme)
  console.log(reeme)
  save(reeme)
  setId('')
  alert('hahaha')
  }else if(idd===addd[idd-1].id){
addd[idd-1].question=ques
addd[idd-1].options[0]=inp1
addd[idd-1].options[1]=inp2
addd[idd-1].options[2]=inp3
addd[idd-1].options[3]=inp4
addd[idd-1].ans=answer
console.log(addd[idd-1])
let reem=[...addd]
save(reem)
setAdd(reem)

alert('working')

  }
  
}
function handle1(){
if(items+1>1){
  setItems(items - 1)

}
}
function handle(){
 
 if(items+1  < addd.length){
 setItems(items + 1)

}else if(items+1 >= addd.length){
setDone(true)

}
console.log(done)
;
console.log(addd)
}


  return (
    <>

<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={ <Home done={done} setDone={setDone} handle={handle} handle1={handle1} add={add} tab={tab} tub={tub} ques={ques} answer={answer} inp1={inp1} inp2={inp2} inp3={inp3} inp4={inp4} setAnswer={setAnswer} setInp1={setInp1} setInp2={setInp2} setInp3={setInp3} setInp4={setInp4} setTab={setTab} setTub={setTub} setQues={setQues} addd={addd} items={items} setItems={setItems}/>}/>
  <Route path='/login' element={<Login setId={setId} addd={addd}/>}/>
  
  <Route path='/documentation' element={<Doc/>}/>
  <Route path='/questions' element={<Ouestions  addd={addd}/>}/>
  <Route path='/addQuestions' element={<AddQuestions isEdit={isEdit} setIsEdit={setIsEdit} addd={addd} setAdd={setAdd} save={save} idd={idd} setId={setId} ques={ques} inp1={inp1} inp2={inp2} inp3={inp3} inp4={inp4} answer={answer} setQues={setQues} setInp1={setInp1} setInp2={setInp2} setInp3={setInp3} setInp4={setInp4} setAnswer={setAnswer} add={add}/>}/>
</Routes>
   
       </BrowserRouter>
    </>
  )
}

export default App
