import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Videos from "./Components/Videos";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />




      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
