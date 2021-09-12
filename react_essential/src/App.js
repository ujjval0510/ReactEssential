import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // useState store local value of variable and if it change
  // then re-render view
  const [emotions, setEmotions] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  /**
   * if calls when function render first time
   * if call every time when emotions state value changed.
   */
  useEffect(() => {
    console.log("Use Effect 1" + emotions)
  }, [emotions]);

  /**this useEffect watch the state value 
   * (secondary) if it's change then it calls automatically
   * and print console log
   */
  useEffect(() => {
    console.log("Use Effect 2 " + secondary)
  }, [secondary]);

  return (
    <>
      <h1>Hello, I am {emotions}</h1>
      <button onClick={() => setEmotions("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotions("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotions("sad")}>Sad</button>
    </>
  );
}

export default App;
