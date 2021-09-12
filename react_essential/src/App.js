import './App.css';
import { useState, useEffect, useReducer } from 'react';

function App() {
  // useState store local value of variable and if it change
  // then re-render view
  const [emotions, setEmotions] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  /** useReducer : it takes in the current state and
   * it returns a new state, then use this function to update the state.
   */
  const [checked, toggle] = useReducer((checked) => !checked, false);

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
      <h1>Hello, I am {emotions} and {secondary}</h1>
      <ul style={{ margin: 10 }}>
        <li style={{ margin: 10 }}>
          <button onClick={() => setEmotions("happy")}>Make Happy</button>
        </li>
        <li style={{ margin: 10 }}>
          <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
        </li>
        <li style={{ margin: 10 }}>
          <button onClick={() => setEmotions("frustrated")}>Frustrate</button>
        </li>
        <li style={{ margin: 10 }}>
          <button onClick={() => setEmotions("sad")}>Sad</button>
        </li>
      </ul >
      <ul>
        <input type="checkbox" value={checked} onChange={toggle} />
        <p>{checked ? "Checked" : "Not checked"}</p>
      </ul>
    </>
  );
}

export default App;
