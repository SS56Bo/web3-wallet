import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  //function to create a seed phrase
  function createSeedPhrase() {
    const seedPhrase = ethers.Wallet.createRandom().mnemonic.phrase;
    setMnemonic(seedPhrase);
  }

  return (
    <>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h3>
          Seed Phrase: <input type="text" value={mnemonic} readOnly />
        </h3>
        <button onClick={createSeedPhrase}>Generate Seed Phrase </button>
      </div>
    </>
  );
}

export default App;
