// import requirements
import {Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// React toastity
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import pages
import RegistrationPage from "./pages/registrationPage/RegistrationPage"
import LoginPage from "./pages/loginPage/LoginPage"
import ActivateUser from "./components/ActivateUserComponent/ActivateUser"



// app function
function App() {

  return (
    <>
      <Routes>
        <Route exact path='/registration' element={<RegistrationPage />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/activate' element={<ActivateUser />}></Route>
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
