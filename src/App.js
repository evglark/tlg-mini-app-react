import { useEffect } from 'react';
import './style.css';

const tg = window.Telegram.WebApp;

function App() {
  const onClick = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onClick}>Close</button>
    </div>
  );
}

export default App;
