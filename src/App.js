import { useState } from "react";



function App() {

  const [count, setCount]=useState(0)

  function IncreaseCount(){
    return(
        setCount(count + 1)
    )
  }

  function DecreaseCount(){
    return(
        (count>0?setCount(count-1):(0))
    )
  }


  return (
    <div className="App">
      <>
      <h1>{count}</h1> 
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>

      </>
    </div>
  );
}

export default App;