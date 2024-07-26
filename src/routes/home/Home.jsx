import { Link } from 'react-router-dom'
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

export const Home = () => {
    const [typingStatus, setTypingStatus] = useState('')
  return (
    <div className="home">
      <img src="/orbital.png" alt="home image" className="orbital" />
      <div className="left">
        <h1>Voltz AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          jfjjfifii rfro roeioeieoo oroo eoeoe oeoeo ourur ororo wsuuue rororor
          jfsiie eir wowowd ddd wwwe euue ror oeoeoe oririr.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot image" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? `/human1.jpeg`
                  : typingStatus === `human2`
                  ? `/human2.jpeg`
                  : `/bot.png`
              }
              alt="bot image"
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human1: We produce food for Mice",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: We produce food for Hamsters",
                1000,
                () => {
                  setTypingStatus("human");
                },
                "Human: We produce food for Guinea Pigs",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: We produce food for Chinchillas",
                1000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="logo" />
        <div className='links'>
          <Link to={`/`}>Terms of Service</Link>
          <Link to={`/`}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
