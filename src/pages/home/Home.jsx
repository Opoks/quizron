
import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({setDone,done,tab,tub,next,setItems,handle,handle1,setTab,setTub,items,addd}) => {
 
  return (
    <div>
       
  <div className='home'> 
   {done?(<div><h2 className='score'>Your score: {addd.reduce((a,b)=>a+b.score,0)} / {addd.length}</h2><button className='retry' onClick={()=>{if(items+1 >= addd.length){setDone(false);setItems(0); setTab(''); setTub('');  addd.map((sdd)=>{sdd.score=0;sdd.clicked=''});}}}>RETRY</button><div>{addd.map((as,inf)=>(<h2 key={inf}>({inf+1}) {as.question}<br></br><div id='home-selected-options' className={as.clicked===as.ans?'correct':'wrong'}>{as.clicked}</div></h2>))}</div></div>):(<div className='home'><h2>({items +1}) {addd[items].question}</h2>
     <div className="ans">
     {
      addd[items].options.map((option,index)=>(
        <button id='home-options' className={tab===option?'correct1':tub===option?'wrong1':''}   key={index} onClick={()=>
            {if( option===addd[items].ans){
                setTab(option);
              addd[items].clicked=option
                
               setTub('')
              
               addd[items].score=1;
              
            }else{
                setTub(option)
               setTab("")
                 addd[items].clicked=option
                 
             
            }
            }
          }>{option}</button>
      ))
     }
     </div>
       <button className='prev' onClick={()=>handle1()}>prev</button>
    <button className='next' onClick={()=>handle()}><Link to={next}>Next</Link></button>
  
     </div>)
}
  </div>
    
    
    
      </div> 

   
  )
}

export default Home