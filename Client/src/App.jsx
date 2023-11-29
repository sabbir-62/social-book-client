import {Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegistrationPage from "./pages/registrationPage/RegistrationPage"
import LoginPage from "./pages/loginPage/LoginPage"

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/registration' element={<RegistrationPage />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
      </Routes>

      <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
    </>
  )
}

export default App
