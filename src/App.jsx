import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { LoginData } from './components/appendUserData';

function App() {
  return (<>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <LoginData />
      </div>
    </div>
  </>

  );
}

export default App;
