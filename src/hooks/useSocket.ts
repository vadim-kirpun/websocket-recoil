import useWebSocket from 'react-use-websocket';

const socketUrl = 'wss://socketsbay.com/wss/v2/2/demo/';

const useSocket = () =>
  useWebSocket(socketUrl, {
    onMessage(event) {
      console.log('%c event =', 'color: lightblue', event);
    },
  });

export default useSocket;
