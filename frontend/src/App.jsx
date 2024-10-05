
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
function App() {


  return (
    <Router>

      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>

    </Router>

  )
}

export default App
