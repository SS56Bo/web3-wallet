import { ethers } from "ethers";
import { useState } from "react";
import "./SeedPhrase.css";

const SeedPhrase = () => {
  const [mnemonic, setMnemonic] = useState("");

  const handleGenerate = () => {
    const mn = ethers.Wallet.createRandom().mnemonic.phrase;
    setMnemonic(mn);
  };

  return (
    <div className="seed-container">
      <input
        type="text"
        className="textBox"
        placeholder="Seed Phrase will appear here"
        value={mnemonic}
        readOnly
      />
      <button className="generateButton" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};

export default SeedPhrase;
