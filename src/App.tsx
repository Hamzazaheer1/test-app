import { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import "./App.css";

function App() {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  console.log("hamza", connecting, provider);

  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      {connected && (
        <div>
          <>
            {chainId && "Connected chain: ${chainId}"}
            <p></p>
            {account && "Connected account: ${account}"}
          </>
        </div>
      )}
    </div>
  );
}

export default App;
