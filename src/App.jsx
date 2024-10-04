import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import AppProvider from "./AppProvider";
import Footer from "./layouts/footer/Footer"
import Header from "./layouts/header/Header"
import VerifyEmail from "./pages/login/VerifyEmail";
import Register from "./pages/register/register";
import ForgotPasswordPage from "./pages/login/ForgotPasswordPage";
import CreateNewPassword from "./pages/login/CreateNewPassword";
import Login from "./pages/login/Login";
import Start from "./pages/start/Start"
import Panel from "./layouts/panel/Panel"
import PostManagement from './pages/Admin(DucAnh)/DuyetBaiDang';
import PostPendingApproval from './pages/User(DucAnh)/BaiDangDuocDuyet';

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <div className="overflow-hidden">
        <Header />
        {/* <Panel /> */}
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verifyEmail' element={<VerifyEmail />} />
          <Route path='/forgotPassword' element={<ForgotPasswordPage />} />
          <Route path='/createNewPassword' element={<CreateNewPassword />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/PostManagement' element={<PostManagement/>}/>
          <Route path='/PostPendingApproval' element={<PostPendingApproval/>}/>

        </Routes>
        <Footer />
      </div>
    </AppProvider>

  )
}

export default App;
