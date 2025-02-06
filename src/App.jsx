import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [address, setAddress] = useState("");
  const [privKey, setPrivateKey] = useState("");
  //function to create a seed phrase
  function createSeedPhrase() {
    const walletC = ethers.Wallet.createRandom();
    const seedPhrase = walletC.mnemonic.phrase;
    setMnemonic(seedPhrase);
    setAddress(walletC.address);
    setPrivateKey(walletC.privateKey);
  }

  return (
    <>
      <div>
        <h2>Hello, this an working HD Wallet Creator!</h2>
      </div>
      <div>
        <h3>
          Mnemonic Phrase: <input type="text" value={mnemonic} readOnly />
        </h3>
        <h3>
          Address: <input type="text" value={address} readOnly />
        </h3>
        <h3>
          Private Key: <input type="text" value={privKey} readOnly />
        </h3>
        <button onClick={createSeedPhrase}>Generate Seed Phrase </button>
      </div>
    </>
  );
}

export default App;
