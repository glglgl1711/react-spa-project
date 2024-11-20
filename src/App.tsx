import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputFormPage from "./pages/Input-Form";
import LoginFormPage from "./pages/Login-Form";

// react-router-dom : URL 주소에 따라 원하는 컴포넌트 (또는 페이지) 로 페이지 전환 가능

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/input-form" element={<InputFormPage/>} />
      <Route path="/login-form" element={<LoginFormPage/>} />
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
