import { useEffect, useState } from 'react';

import ProgressBar from './components/progress-bar/ProgressBar';

import './App.css';

function App() {
  const [value, setValue] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    setInterval(()=> {
      setValue((val) => val + 1)
    }, 100)
  }, [])
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <div className="ProgressDemo">
        <ProgressBar value={value} onComplete={() => setComplete(true)} />
        <div>{ complete ? "Completed!!!" : "Loading" }</div>
      </div>
    </div>
  );
}

export default App;
