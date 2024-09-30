import Footer from "./layouts/footer/Footer"
import Header from "./layouts/header/Header"
// import Page from "./layouts/login_signup/Page"
// import Login from "./pages/login/Login"
// import Start from "./pages/start/start"
import Login_Page from "./pages/login/Login_Page"

function App() {

  return (
    <div className="overflow-hidden">
      <Header />
      {/* <Start /> */}
      <Login_Page />
      <Footer />
    </div>
  )
}

export default App
