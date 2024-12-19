import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduce from './Pages/Introduce/Introduce';
import Quizz from './Pages/Quizz/Quizz';

function App() {
  return (
    <div className='App'>
      {/* Utilisez seulement /quizz.app comme basename */}
      <Router basename="/quizz.app">
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quizz/:difficulty/:amount" element={<Quizz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

