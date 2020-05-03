import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] =  React.useState(true);
  const [color, setColor] = React.useState("red");
  React.useEffect(() => {
    const colors = ["red", "green", "blue"];
    let i = 0;
    const interval = setInterval(() => {
      i = i+1;
      setColor(colors[i])
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="App" onClick={() => setShow((show) => !show)}>
      <header className="App-header">
        {show && <img src={logo} className="App-logo" alt="logo" />}
        <p color={color}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
