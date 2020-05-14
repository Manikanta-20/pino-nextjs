import Head from 'next/head'
import React from 'react';
const Pino = require('pino');


export const  Home=()=> {

  const [val,setVal]=React.useState(20);

  const onSubmit=(event)=>{
    event.preventDefault();
    Pino({}).info({ name: 'John Doe' });
  }
  
  return (
    <div className="container">
   
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={(event)=>onSubmit(event)}>Submit</button>
    </div>
  )
}
export default Home;