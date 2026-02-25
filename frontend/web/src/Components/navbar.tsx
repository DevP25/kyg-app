import './navbar.css';
import { Link } from "react-router-dom"

function Navbar() {

    return(
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li>Logo / Web Name</li>
                    </ul>
                </div>

                <div className="nav-center">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>News</li>
                        <li><Link to='page1'>Senate</Link></li>
                        <li>House of Rep.</li>
                    </ul>
                </div>

                <div className="nav-right">
                    <ul>
                        <li>Login/Sign up</li>
                    </ul>
                </div>
            </nav>    
        </>
    )
}

export default Navbar