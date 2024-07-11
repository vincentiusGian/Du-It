import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/genAI',
  })
  return (
    <main>
        {RenderForm()}
        {RenderMessages()}
    </main>
  );

  function RenderForm() {
    return (
      <form action="">
        <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">What is your </span>
        <span className="label-text-alt">Top Right label</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div>
    </label>
      </form>
    );
  } 


}
