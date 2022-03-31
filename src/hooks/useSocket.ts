import { nanoid } from 'nanoid';
import { useSetRecoilState } from 'recoil';
import useWebSocket from 'react-use-websocket';

import { messagesAtom } from '../store/atoms';

const socketUrl = 'wss://socketsbay.com/wss/v2/2/demo/';

const useSocket = () => {
  const setMessages = useSetRecoilState(messagesAtom);

  return useWebSocket(socketUrl, {
    onMessage(event) {
      setMessages((oldMessages) => [
        ...oldMessages,
        { id: nanoid(), text: event.data },
      ]);
    },
  });
};

export default useSocket;
