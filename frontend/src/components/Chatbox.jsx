import React from 'react'
import { useState } from 'react';
import api from "../services/api"

function Chatbox() {
  const[question,setQuestion] = useState("");
  const[answer,setAnswer] = useState("");
  const[loading,setLoading] = useState(false);

  const askAI = async()=>{
    try
    {
        setLoading(true);
        const response = await api.post("/ai/chat",{
            question
        });
        setAnswer(response.data.answer);
    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
        setLoading(false);
    }
  };
  return (
    <div className='mt-12 bg-white shadow rounded-lg p-6'>
      <h2 className='text-2xl font-bold mb-4'>Chat with your notes</h2>
      <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask anything about your notes..." className='border p-3 rounded w-full' />
      <button onClick={askAI} className='mt-4 bg-blue-600 text-white px-5 py-3 rounded'>ASK AI</button>
      {loading && <p className='mt-4 text-blue-600'>Thinking...</p>}
      {answer && 
        <div className='mt-6 bg-gray-100 p-4 rounded'>
            <h3 className='font-bold'>Answer</h3>
            <p>{answer}</p>
        </div>}
    </div>
  )
}

export default Chatbox
