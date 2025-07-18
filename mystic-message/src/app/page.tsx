import Image from "next/image";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <img src="../Mystic-logo.png"></img>
      <h1>Welcome to mystic message</h1>
      <h2>Connect now for 10 minutes with strangers across the web!</h2>
      <a href="./pages/message.tsx"><p>Connect now!</p></a>
    </div>
  );
}
