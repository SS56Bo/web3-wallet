import Greetings from "./Greetings";

function App() {
  return (
    <>
      <div>
        <Greetings />
        <div>
          Enter Wallet Address:
          <input type="text" id="fname" name="address" />
        </div>
      </div>
    </>
  );
}

export default App;
