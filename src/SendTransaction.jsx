import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import './SendTransaction.css'; // Import your CSS file

export function SendTransaction() {
  const { data: hash, sendTransaction } = useSendTransaction();

  async function sendTx() {
    const to = document.getElementById("to").value;
    const value = document.getElementById("value").value;
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <div className="send-transaction-container">
      <input id="to" placeholder="0xA0Cf…251e" required />
      <input id="value" placeholder="0.05" required />
      <button onClick={sendTx}>Send</button>
      {hash && <div className="transaction-hash">Transaction Hash: {hash}</div>}
    </div>
  );
}
