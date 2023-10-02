import './App.css';
import Home from './components/home/Home.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import PropertyPage from './components/propertypage/PropertyPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/property/:id' element={<PropertyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
