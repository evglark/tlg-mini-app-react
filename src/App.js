import { useEffect, useState } from 'react';

import './style.css';

const tg = window.Telegram.WebApp;

function App() {
  const [mnemonic, setMnemonic] = useState('');

  const onClick = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onClick}>Close</button>
      <div>{mnemonic}</div>
    </div>
  );
}

export default App;
