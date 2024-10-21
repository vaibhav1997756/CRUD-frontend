import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Crud from './Students/Crud';
import CreateStudent from './Students/CreateStudent'
import UpdateStudent from './Students/Update'
import ReadStudent from './Students/Read'
import UploadData from './Students/UploadData'
function App() {
  return (
    <div>
         
             <Router>
             <Routes>
              <Route path='/' element={<Crud />} />
              <Route path='/create' element={<CreateStudent />} />
              <Route path='/update/:id' element={<UpdateStudent />} />
              <Route path='/read/:id' element={<ReadStudent />} />
              <Route path='/upload' element={<UploadData />} />

             </Routes>
             </Router>
          
      
    </div>
  );
}

export default App;
