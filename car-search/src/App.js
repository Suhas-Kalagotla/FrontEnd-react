import './App.css';
import BookData from './Data.json'; 
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/page/:id' element={<Home/>}/>
          </Routes>
      </Router>
  );
}

export default App;
