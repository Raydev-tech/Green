import { BrowserRouter,Routes,Route } from "react-router";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
     <BrowserRouter>
       <Navbar />
      <Routes>
       <Route path="/" element={<HomePage />} />
      </Routes>
     </BrowserRouter> 
      <Footer />
    </>
  )
}

export default App
