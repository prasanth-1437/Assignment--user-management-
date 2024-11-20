
import './App.css';
import UserList from './Components/UserList/userList';
import Home from './Components/HomePage/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/displayUsers' element={<UserList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
