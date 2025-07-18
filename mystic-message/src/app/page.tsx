import Image from "next/image";

export default function Home() {
  return (
    <div className="home-wrapper">
      <img src="../Mystic-logo.png"></img>
      <h1>Welcome to mystic message</h1>
      <h2>Connect now for 10 minutes with strangers across the web!</h2>
      <button>
        <p>Connect now!</p>
      </button>
    </div>
  );
}
