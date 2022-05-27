import { addResponseMessage } from 'react-chat-widget';

export const handleNewUserMessage = (newMessage) => {
  addResponseMessage('Echo: ' + newMessage);
};