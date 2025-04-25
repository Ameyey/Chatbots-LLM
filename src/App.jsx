import { useState } from 'react'
import'./app.scss'
function App() { 
 
 const [message , setMeassage] = useState([{
  role:"model",
  content:"Hello ,how can I help you ? "
 },
 {
  role:"user",
  content:"Hello , how are you ? "
 },
 {
  role:"model",
  content:"I am fine , thank you ! "

 },
 {
  role:"user",
  content:"What is your name? "
 },
 {
  role:"model",
  content:"My name is ChatGPT ! .."
 }
]) 
  return (
    <main>
 <section>
  <div className="conversation-area">
      <div className="messages">
        {
          message.map((message,index)=>{
            return(             
              <div className={`message ${message.role}`} key={index} >
                {message.content}
              </div>              
            )
          })
        }
      </div>
   <div className='input-area'>
    <input type="text" placeholder='Meassage' />
    <button>Send </button>

   </div>

  </div>
 </section>
    </main>

  )
}

export default App
