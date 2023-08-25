import { FC } from 'react';

interface MessageProps {
  message: string;
}

const Message: FC<MessageProps> = ({ message }) => (
  <div className="message">
    <p>{message}</p>
  </div>
);

export default Message;
