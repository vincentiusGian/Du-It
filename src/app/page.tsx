/*
"use client"

import { useChat } from 'ai/react';

export default function Home() {
  const {messages, input, handleInputChange, handleSubmit, isLoading, stop} = useChat({
    api: 'api/genai',
    initialMessages: [
      {
        id: '',
        content: `You are a financial consultant. Give me a step by step how to get the goals step by step.`,
        role: 'system'
      }
    ]
  });
  return (
    <main>
        {RenderForm()}
        {RenderMessages()}
    </main>
  );

  function RenderForm() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, {
          data: {
            prompt: input
          }
        })
      }}>
        <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">What is your goals?</span>
      </div>
      <input onChange={handleInputChange} value={input}type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </label>
    <button className="btn" type='submit'>SUBMIT</button>
      </form>
    );
  } 

  function RenderMessages()
  {
    
    return <div>
      {messages.map((m, index)=>{
        console.log(m.content);
        return <div>{m.content}</div>
      })}
    </div>
  }


}
*/
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text } =  generateText({
  model: google('models/gemini-pro'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

export default function Home() {
  return <div>{text}</div>
}