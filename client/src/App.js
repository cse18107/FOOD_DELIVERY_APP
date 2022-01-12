import './App.css';
import {Route,Routes} from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import HomePage from './containers/pages/HomePage/HomePage';

function App() {


  return (

    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
