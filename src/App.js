import { useEffect, useState } from 'react';
import { generateMnemonic } from 'bip39';

import './style.css';

const tg = window.Telegram.WebApp;

function App() {
  const [mnemonic, setMnemonic] = useState('');

  const onClick = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
    // setMnemonic(bip39.generateMnemonic());
alert(generateMnemonic());
  }, []);

  return (
    <div className="App">
      <button onClick={onClick}>Close</button>
      <div>{mnemonic}</div>
    </div>
  );
}

export default App;
