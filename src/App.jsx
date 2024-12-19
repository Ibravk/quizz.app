import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';

import './App.css'
import Introduce from './Pages/Introduce/Introduce';
import Quizz from './Pages/Quizz/Quizz';

function App() {


  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}></Route>
          <Route path='/quizz/:difficulty/:amount' element={<Quizz/>}></Route>






        </Routes>
      </Router>
  
    </div>
  );
}

export default App
