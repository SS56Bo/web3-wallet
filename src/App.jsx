import { useState } from "react";
import { ethers } from "ethers";
import { Wallet, HDNodeWallet } from "ethers";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  function createSeedPhrase() {
    const wallet = ethers.Wallet.createRandom();
    const seedPhrase = wallet.mnemonic.phrase;
    setMnemonic(seedPhrase);
  }

  return (
    <>
      <div>
        <h2>Hello, this is a working HD Wallet Creator!</h2>
      </div>
      <div>
        <h3>
          Mnemonic Phrase: <input type="text" value={mnemonic} readOnly />
        </h3>
        <button onClick={createSeedPhrase}>Generate Seed Phrase</button>
      </div>
      <EthWallet mnemonic={mnemonic} />
    </>
  );
}

export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  return (
    <div>
      <button
        onClick={async function () {
          if (!mnemonic) return;
          const hdNode = HDNodeWallet.fromPhrase(mnemonic);
          const child = hdNode.deriveChild(currentIndex);
          const wallet = new Wallet(child.privateKey);
          setCurrentIndex(currentIndex + 1);
          setAddresses([...addresses, wallet.address]);
        }}
      >
        Add ETH wallet
      </button>

      {addresses.map((p, index) => (
        <div key={index}>Eth - {p}</div>
      ))}
    </div>
  );
};

export default App;
