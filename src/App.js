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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
