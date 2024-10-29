import { Link } from "react-router-dom";
import './Landing.css'; // Import the CSS file

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="wallet-options-container">
        <div className="wallet-option">
          <Link to="/acc" className="landing-link wallet-button">Account</Link>
          <span className="wallet-id">Your Account Details</span>
        </div>
        <div className="wallet-option">
          <Link to="/wo" className="landing-link wallet-button">See all Wallet Options</Link>
          <span className="wallet-id">Explore Wallet Options</span>
        </div>
      </div>
    </div>
  );
}
