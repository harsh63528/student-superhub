import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
return(
    <nav className="navbar">
        <div className="logo "><h1>logo</h1></div>
        <div className="options">
            <Link to='/tool'>tools</Link>
            </div>
        <div className="account">account</div>
    </nav>
)
}