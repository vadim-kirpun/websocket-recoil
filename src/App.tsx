import './App.css';
import useSocket from './hooks/useSocket';

const App = () => {
  useSocket();

  return <div className="App"></div>;
};

export default App;
