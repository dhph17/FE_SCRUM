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
import Start from "./pages/start/Start";
import Panel from "./layouts/panel/Panel";
import PostApproval from "./pages/user/BaiDangDuocDuyet";
import PostManagement from "./pages/user/SuatDayDaGiao";
import DuyetBaiDang from "./pages/admin/DuyetBaiDang";
import TutorAccount from "./pages/admin/tutorAccount";
import ParentAccount from "./pages/admin/parentAccount";
import CreatePost from "./pages/user/CreatePost";
import UpdatePost from "./pages/user/UpdatePost";
import MainPageParent from "./pages/user/MainPageParent";
import MainPageTutor from "./pages/user/MainPageTutor";
import BaiDangChoDuyet from "./pages/user/BaiDangChoDuyet";
function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <div className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/createNewPassword" element={<CreateNewPassword />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/admin/tutor-account" element={<TutorAccount />} />
          <Route path="/admin/parent-account" element={<ParentAccount />} />
          <Route path="/admin/approve-post" element={<DuyetBaiDang />} />

          <Route path="/parent/assigned" element={<PostManagement />} />
          <Route path="/parent/view-posts" element={<PostApproval />} />
          <Route path="/parent/pending-posts" element={<BaiDangChoDuyet />} />
          <Route path="/parent/create-post" element={<CreatePost />} />
          <Route path="/parent/update-post" element={<UpdatePost />} />
          <Route path="/parent/main-page" element={<MainPageParent />} />

          <Route path="/tutor/main-page" element={<MainPageTutor />} />
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
