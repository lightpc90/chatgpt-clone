
import "./chatList.css";
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">Dashboard</span>
      <Link to={`/`}>Create a New Chat</Link>
      <Link to={`/`}> Explore Voltz AI</Link>
      <Link to={`/`}>Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
        <Link to={`/`}>My Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="./logo.png" />
        <div className="text">
          <span>Upgrade to Voltz AI Pro</span>
          <span>Get Unlimited Access to all Features</span>
        </div>
      </div>
    </div>
  );
}

export default ChatList