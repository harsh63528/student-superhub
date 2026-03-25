import Home from "./modules/home/home"
import Navbar from "./component/navbar"
import { Route, Routes } from "react-router-dom"
import NotFound from "./component/404"

function App() {
 return(
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
 )
}

export default App
