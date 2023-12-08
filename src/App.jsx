// importing useState from react
import { useState } from "react";
import './App.css'

function App() {
  // declaring the variables that will hold state
  // mode is the var the holds the value
  // setMode is the function we use to update the value of mode. It triggeres a DOM rerender
  const [mode, setMode] = useState("light");

// event handler function

// event handler without argument
function changeMode() {
  let nextMode = "dark"

  if(mode === "light") {
    setMode("dark");
  } else {
    setMode("light");
    nextMode = "light"
  }
  console.log(`${nextMode} is the best!`);
}

// event handler with an argument
// function changeMode(modeChoice) {
//   console.log(`${modeChoice} is the best!`);
// }

  return (
    <div className={`${mode} app`}>
      {/* conditional rendering example. When mode is light we show the h1 */}
      {mode === "light" && <h1 className='home-header'>React State Code Along</h1>}

      {/* no argument for event handler */}
      <button onClick={changeMode}>Change to dark mode</button>

      {/* when our event handler takes in an argument use an anonymous function */}
      {/* <button onClick={() => changeMode("Dark mode")}>Change to dark mode</button> */}
    </div>
  )
}

export default App
