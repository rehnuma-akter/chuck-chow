import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};
export default App;
