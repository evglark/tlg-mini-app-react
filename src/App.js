import { useEffect } from 'react';
import bip39 from 'bip39';

import './style.css';

const tg = window.Telegram.WebApp;

function App() {
  const [mnemonic, setMnemonic] = useState('');

  const onClick = () => {
    tg.close();
  }

  const createOneMoreMnemonic = () => {
    setMnemonic(bip39.generateMnemonic());
  }

  const copyMnemonic = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        alert("Текст скопирован в буфер обмена!");
      } else {
        alert("Копирование не поддерживается");
      }
    } catch (err) {
      console.error("Ошибка копирования: ", err);
      alert("Ошибка копирования! Попробуйте вручную.");
    }
  }

  useEffect(() => {
    tg.ready();
    setMnemonic(bip39.generateMnemonic());
  }, []);

  return (
    <div className="App">
      <button onClick={onClick}>Close</button>
      <div>
        {mnemonic} <button onClick={copyMnemonic}>Copy</button>
      </div>
      <button onClick={createOneMoreMnemonic}>One More</button>
    </div>
  );
}

export default App;
