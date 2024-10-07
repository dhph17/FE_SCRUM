import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppProvider from "./AppProvider";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import VerifyEmail from "./pages/login/VerifyEmail";
import Register from "./pages/register/register";
import ForgotPasswordPage from "./pages/login/ForgotPasswordPage";
import CreateNewPassword from "./pages/login/CreateNewPassword";
import Login from "./pages/login/Login";
import Start from "./pages/start/Start"
import Panel from "./layouts/panel/Panel"
import PostManagement from './pages/admin/DuyetBaiDang';
import PostPendingApproval from './pages/user/BaiDangDuocDuyet';
import BaiDangDuocDuyet from './pages/user/BaiDangDuocDuyet';
import SuatDayDaGiao from './pages/user/SuatDayDaGiao';
import DuyetBaiDang from './pages/admin/DuyetBaiDang';
import TutorAccount from "./pages/admin/tutorAccount";
import ParentAccount from "./pages/admin/parentAccount";
import CreatePost from "./pages/user/CreatePost";
import UpdatePost from "./pages/user/UpdatePost";

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <div className="overflow-hidden">
        <Header />
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verifyEmail' element={<VerifyEmail />} />
          <Route path='/forgotPassword' element={<ForgotPasswordPage />} />
          <Route path='/createNewPassword' element={<CreateNewPassword />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/PostManagement' element={<PostManagement />} />
          <Route path='/PostPendingApproval' element={<PostPendingApproval />} />
          <Route path="/admin/tutor-account" element={<TutorAccount />} />
          <Route path="/admin/parent-account" element={<ParentAccount />} />
          <Route path="/admin/approve-post" element={<DuyetBaiDang />} />
          <Route path="/parent/assigned" element={<SuatDayDaGiao />} />
          <Route path="/parent/view-post" element={<BaiDangDuocDuyet />} />
          <Route path="/parent/create-post" element={<CreatePost />} />
          <Route path="/parent/update-post" element={<UpdatePost />} />
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
