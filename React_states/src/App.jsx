import React, { useEffect, useState } from 'react';

export default function App() {
  const [name, setName] = useState("Aishu");

  const updateName = () => {
    setName("Malik");
  };

  const [count , setCount] = useState(0);

  // const inc = () =>{
  //   setCount(count + 1)
  // }

  // const dec = () =>{
  //   setCount(count -1)
  // }
  // const reset = () =>{
  //   setCount(0);
  // }

  useEffect(() =>{
    setInterval(() =>{
      setCount(count+1)
    },1000)
  },[count])

  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick={updateName}>Change Name</button>
      <br /><br />
      <h2>Count is {count}</h2>
      {/* <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}