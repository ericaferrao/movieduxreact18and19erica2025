import './App.css';
import './styles.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>

      <header className="header">
        <h1>Welcome to Movie Dux</h1>
      </header>
      <footer className="footer">
        <p className="footer">Footer Content</p>
      </footer>
    </div>
  );
}

export default App;
