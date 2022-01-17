import './App.css';
import {BrowserRouter,
        Routes,
        Route} 
        from "react-router-dom";

//components
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";

//pages
import Home from "./Pages/Home";
import AddRecipe from "./Pages/AddRecipe";


function App() {
  return (
    
    <div>
    {/* <Navbar/> */}
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Home"/>} />
        <Route path="/addrecipe" element={<AddRecipe title="AddRecipe"/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
