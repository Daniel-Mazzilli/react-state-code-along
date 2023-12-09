// importing useState from react
import { useState } from "react";
import "./App.css";

//colors array variable, from which we will then randomly select a color
const colors = [
  "papayawhip",
  "thistle",
  "peachpuff",
  "lightgoldenrodyellow",
  "paleturquoise",
];

function App() {
  // declaring the variables that will hold state
  // mode, color, counter, isDarkMode, are the variables that hold the values
  // setMode, setColor, setCounter, setIsDarkMode are the functions we use to update the values of mode, color, counter, isDarkMode. They will trigger a DOM rerender
  // it is important to set initial values that will match the data type we want the variables to have. String, number, boolean, etc
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("ivory");
  const [counter, setCounter] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // event handler functions below

  // event handler without argument
  function changeMode() {
    let nextMode = "dark";

    if (mode === "light") {
      setMode("dark");
      // added setColor to change background
      setColor("midnightblue");
      // added setIsDarkMode to update isDarkMode to reflect what mode is active
      setIsDarkMode(true);
    } else {
      setMode("light");
      // added setColor to change background
      setColor("ivory");
      // added setIsDarkMode to update isDarkMode to reflect what mode is active
      setIsDarkMode(false);
      nextMode = "light";
    }
    console.log(`${nextMode} is the best!`);
  }

  // event handler with an argument for changeMode
  // function changeMode(modeChoice) {
  //   console.log(`${modeChoice} is the best!`);
  // }

  function changeColor() {
    // generating a random index between 0 and colors.length, length val not included
    const chooseIndex = Math.floor(Math.random() * colors.length);
    // update color to the color at the randomly generated index in the colors array
    setColor(colors[chooseIndex]);
    // do not use counter++ in the setCounter
    setCounter(counter + 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  // another way to toggleDarkMode using booleans
  function toggleDarkMode() {
    //added some code to update the background
    if(isDarkMode){
      setColor("ivory")
      setMode("light")
    } else {
      setColor("midnightblue")
      setMode("dark")
    }
    
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      className={`${mode} app`}
      style={{ height: "100vh", backgroundColor: color }}
    >
      {/* conditional rendering example. When mode is light we show the h1 */}
      {/* {mode === "light" && <h1 className='home-header'>React State Code Along</h1>} */}
      <h1 className="home-header">Testing React State</h1>

      {/* no argument for event handler */}
      {/* added logic to dynamically update the button text */}
      <button onClick={changeMode}>
        Change to {isDarkMode ? "light" : "dark"} mode
      </button>

      {/* when our event handler takes in an argument use an anonymous function */}
      {/* <button onClick={() => changeMode("Dark mode")}>Change to dark mode</button> */}

      <h2>Current background color: <span>{color}</span></h2>
      <h3>The color has been changed to a random color {counter} times</h3>
      <div className="buttons">
        <button onClick={changeColor}>
          Change background to a random color
        </button>
        <button onClick={resetCounter}>Reset counter</button>

        <button onClick={toggleDarkMode}>
          Dark mode is {isDarkMode ? "on" : "off"}
        </button>
      </div>
    </div>
  );
}

export default App;
