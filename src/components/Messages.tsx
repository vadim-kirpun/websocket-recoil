import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { messagesAtom } from '../store/atoms';

const Messages = () => {
  const messages = useRecoilValue(messagesAtom);

  return (
    <ul className="App">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};

export default memo(Messages);
