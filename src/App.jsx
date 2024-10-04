import Footer from "./layouts/footer/Footer"
import Header from "./layouts/header/Header"
// import Page from "./layouts/login_signup/Page"
// import Login from "./pages/login/Login"

import ForgotPasswordPage from "./pages/login/ForgotPasswordPage"
// import CreateNewPassword from "./pages/login/CreateNewPassword"
// import VerifyEmail from "./pages/login/VerifyEmail"

// import Start from "./pages/start/start"

// import Start from "./pages/start/start"
// import Login_Page from "./pages/login/Login_Page"
// import Register from "./pages/register/register";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      {/* <Start /> */}
      <ForgotPasswordPage/>

      {/* <Login_Page /> */}
      <Footer />
      {/* <Login/> */}
      {/* <CreateNewPassword/> */}
      {/* <VerifyEmail/> */}
      {/* <Register /> */}

      {/* <Start /> */}
      
    </div>
  );
}

export default App;
