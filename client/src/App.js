import './App.css';
import {Route,Routes} from 'react-router-dom';
import NavBar from './containers/NavBar/NavBar';
import HomePage from './containers/pages/HomePage/HomePage';
import AddPage from './containers/pages/AddPage/AddPage';
import EditPage from './containers/pages/EditPage/EditPage';
import ShowCart from './containers/pages/ShowCart/ShowCart';
import LoginPage from './containers/pages/LoginPage/LoginPage';

function App() {


  return (

    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/add-food" element={<AddPage/>} />
        <Route path="/edit-food" element={<EditPage/>} />
        <Route path="/show-cart" element={<ShowCart/>} />
        <Route path="/login-sing-up" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
