
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
function App() {


  return (
    <Router>

      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      </Routes>
      <Toaster/>
    </Router>

  )
}

export default App
