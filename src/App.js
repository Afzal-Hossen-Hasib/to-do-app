import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './component/AddTask/AddTask';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Header from './component/Shared/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
