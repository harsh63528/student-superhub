import './app.css'
import Home from "./modules/home/home"
import Navbar from "./component/navbar/navbar"
import { Route, Routes } from "react-router-dom"
import NotFound from "./component/404"
import Tools from './modules/tools/tools'
function App() {
 return(
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path='/tool' element={<Tools/>}/>
    </Routes>
    </>
 )
}

export default App
