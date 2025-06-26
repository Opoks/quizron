import React from 'react'
import './AddQuestions.css'

const AddQuestions = ({setId,idd,addd,setAdd,save,ques,inp1,inp2,inp3,inp4,answer,setQues,setInp1,setInp2,setInp3,setInp4,setAnswer,add}) => {
  
 

  function editt(index){
    addd.filter((ad,aff)=>{if(aff===index){
      setQues(ad.question)
      setInp1(ad.options[0])
      setInp2(ad.options[1])
      setInp3(ad.options[2])
      setInp4(ad.options[3])
      setAnswer(ad.ans)
      setId(ad.id)
      
    }})
  }
  function deletee(index) {
    let del=addd.filter((aff,ad)=>ad != index)
    setAdd(del)
    save(del)
   setId('')
  }
  return (
    <div className='add-question'>
     
     
      {idd===''?setId(addd.length+1):''}
         <div className="add-question-inputs">
      <input type="text" placeholder='Enter Question' value={ques} onChange={(e)=>setQues(()=>e.target.value)} />
      <input type="text" placeholder='Enter Option 1' value={inp1} onChange={(e)=>setInp1(()=>e.target.value)} />
      <input type="text" placeholder='Enter Option 2' value={inp2} onChange={(e)=>setInp2(()=>e.target.value)} />
      <input type="text" placeholder='Enter Option 3' value={inp3} onChange={(e)=>setInp3(()=>e.target.value)} />
      <input type="text" placeholder='Enter Option 4' value={inp4} onChange={(e)=>setInp4(()=>e.target.value)} />
      <input type="text" placeholder='Enter Answer' value={answer} onChange={(e)=>setAnswer(()=>e.target.value)} />
      <input type="text" value={idd} readOnly/>
   <button onClick={()=>add()}>ADD</button>
   <button onClick={()=>{if(confirm('This will delete your added and undo editted and reset questions default.')){localStorage.removeItem('quiz');window.location.reload() }else{alert('aaaaa')}}}>DEFAULT</button>
    </div>

     <div className='all-questions'>
      
        {addd.map((add,index)=><div className='ques-ans-edit'><div className='ques-ans'><h3>({index +1}) {add.question}</h3><div><button> {add.options[0]}</button>
        <button> {add.options[1]}</button><button> {add.options[2]}</button>
        <button> {add.options[3]}</button></div></div><div className='btn'><button className='edit' onClick={()=>editt(index)}>EDIT</button><button className='delete' onClick={()=>deletee(index )}>DELETE</button></div></div>)}
    </div>
    </div>
  )
}

export default AddQuestions