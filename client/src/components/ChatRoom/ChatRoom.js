import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// компоненты
import { MessageList } from './MessageList/MessageList';
import { MessageForm } from './MessageForm/MessageForm';
import { UserList } from './UserList/UserList';
// пользовательский хук для работы с чатом
import { useChat } from 'hooks';

export const ChatRoom = () => {
  // получаем параметр roomId из URL
  const { roomId } = useParams();
  // использование пользовательского хука useChat для управления чатом
  const { users, messages, sendMessage, removeMessage } = useChat(roomId);

  // обработка события "user:leave" при выходе из комнаты
  useEffect(() => {
    return () => {
      sendMessage({ messageText: '', senderName: '' });
    };
  }, []);
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-md-8">
          <MessageList messages={messages} removeMessage={removeMessage} />
          <MessageForm username='user' sendMessage={sendMessage} />
        </div>
        <div className="col-md-4">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};