import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import AiChatBot from './components/AiChatBot';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <AiChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
