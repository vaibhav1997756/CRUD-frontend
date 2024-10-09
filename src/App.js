
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Crud from './Crud';
function App() {
  return (
    <div>
         
             <Router>
             <Routes>
              <Route path='/' element={<Crud />} />
             </Routes>
             </Router>
          
      
    </div>
  );
}

export default App;
