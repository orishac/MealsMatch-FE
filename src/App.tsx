
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import './styles/settings.scss';
import './App.css';

function App() {

  return (
        <BrowserRouter>
            <NavBar />
            <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
