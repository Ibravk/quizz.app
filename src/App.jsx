import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Introduce from './Pages/Introduce/Introduce';
import Quizz from './Pages/Quizz/Quizz';

function App() {
  return (
    <div className=''>
      <Router basename="/quizz.app"> {/* Ajouter le basename */}
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/quizz/:difficulty/:amount' element={<Quizz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
