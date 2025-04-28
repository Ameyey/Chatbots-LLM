import { useEffect, useState } from 'react'
import * as webllm from "@mlc-ai/web-llm";
import {CreateMLCEngine } from '@mlc-ai/web-llm'
import'./app.scss'



function App() { 
const [input , setInput ]=useState("")
const [engine , setEngine]= useState(null)


 
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



 useEffect(()=>{
  const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
  webllm.CreateMLCEngine(
    selectedModel,
    {
      initProgressCallback:(initProgress) =>{
        console.log("initProgress",initProgress)
      }
    }
  )
 },[])




async function sendMessgeToLlm(){
 
  const tempMessage = [...message]
  tempMessage.push({
    role:"user",
    content:input
  })

  setMeassage(tempMessage)
  setInput("")

  const reply = await engine.chat.completions.create({
    message,
  });

  console.log("replay",reply)
}

  return (
    <main>
 <section>
  <div className="conversation-area">
      <div className="messages">
        {
          message.map((message,index)=>{
            return(             
              <div className={`message ${message.role}`} key={index}>                
                {message.content}
              </div>              
            )
          })
        }
      </div>
   <div className='input-area'>
    <input type="text"
    onChange={(e)=>{
      setInput(e.target.value)
    }}
    value={input}
    onKeyDown={(e)=>{
      if(e.key === "Enter"){
        sendMessgeToLlm()
      }
    }}
    placeholder='Meassage' />
    <button onClick={()=>{
      sendMessgeToLlm()
    }}
    className="send-button"
    >Send</button>

   </div>

  </div>
 </section>
    </main>

  )
}

export default App
