import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={()=>setCount(count+1)}>
      clicked {count} times
    </button>
    {count>0? 
    <button onClick={()=>setCount(count-1)}>
      Decrease
    </button>:null
     }
    <button onClick ={()=>setCount(0)}>
      Reset
    </button>
    </>
  );
}

export default Counter;
