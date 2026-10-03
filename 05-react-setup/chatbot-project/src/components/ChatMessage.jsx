import robotpfpimg from '../assets/robot.png'
import userpfpimg from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {

  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === 'robot' && <img src={robotpfpimg} className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && <img src={userpfpimg} className="chat-message-profile" />}
    </div>
  );
}