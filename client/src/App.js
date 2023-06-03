import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Components/SignUp/SignUp";
import ApplyNow from "./Components/ApplyNow/ApplyNow";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Academics from "./Components/Academics/Academics";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Partials/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={ <Home/>} />
        <Route path="/signup" element={ <SignUp />} />

        <Route path="/apply-now" element={ <ApplyNow />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/about" element={ <About />} />
        <Route path="/academics" element={ <Academics />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/Navbar" element={ <Navbar />} />


        <Route exact path="*" element={ <NotFound/>} />
      </Routes>
    </div>
    
  );
};

export default App;
