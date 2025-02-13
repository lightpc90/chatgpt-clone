import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>Voltz AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="chat image" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="chat image" />
            <span>Analyse Image</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="chat image" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Ask me anything..."/>
          <button type="submit">
            <img src="/arrow.png"/>
          </button>
        </form>
      </div>
    </div>
  );
};


