import './_Chat.sass';
import { GiftedChat } from 'react-gifted-chat';
import { useState } from 'react';

const Chat = () => {
const [messages, updateMessages] = useState(
  [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
    },
  ],
)

const onSend = message => {
  updateMessages(messages => [...messages, message]);
}

  return (
    <GiftedChat
        messages={messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
  );
}

export default Chat;
