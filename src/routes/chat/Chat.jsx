import { useEffect, useRef } from "react";
import "./chat.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const Chat = () => {
  const endRef = useRef();

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatContainer">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            Test message Test message from user Test message from user Test
            message from user v vTest message from user from ai
          </div>
          <div className="message user">
            Test me Test message from user Test message from userssage from user
          </div>
          <div className="message">
            Test messag Test message from user Test message from user Test
            message from usere from ai
          </div>
          <div className="message user">
            Test mes Test message from user Test message from user Test message
            from user Test message from user Test message from usersage from
            user
          </div>
          <div className="message">
            Test messag Test message from u Test message from user Test message
            from userser Test message from usere from ai
          </div>
          <div className="message user">Test message from user</div>
          <div className="message">
            Test message Test message from user Test message from user Test
            message from user from ai
          </div>
          <div className="message user">
            Test mess Test message from user Test message from userage from user
          </div>
          <div className="message">
            Test mes Test message from user Test message from user Test message
            from user Test message from usersage from ai
          </div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">
            Test Test message from user Test message from user Test message from
            user message from user
          </div>
          <div className="message">Test message from ai</div>
          <div className="message user">
            Test m Test message from user Test message from useressage from user
          </div>
          <div className="message">
            Test messa Test message from user Test message from user Test
            message from user Test message from user Test message from user Test
            message from userge from ai
          </div>
          <div className="message user">
            Test message from user Test message from user Test message from user
            Test message from user Test message from user Test message from user
            Test message from user Test message from user Test message from user
          </div>
          <NewPrompt />
          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
