import './navbar.css'
import { NavLink } from "react-router-dom";

export default function Home() {

    let activeStyle = {
        textDecoration: "none",
        color: "#363636",
        background: "rgba(145, 158, 171, 0.12)",
        borderRadius: "0px 10px",
        padding: "5px 30px 5px 10px",
        fontWeight: "600",
        margin: "0px 0px 0px 10px",
    };

    let inActiveStyle = {
        textDecoration: "none",
        color: "#363636"
    };


    return (
        <header>
            <p className='brand-name'>THUNDERCATS</p>
            <div className='user-login'>
                <span className="material-symbols-outlined icon-user">
                    account_circle
                </span>
                <p>Jekykazuya</p>
            </div>
            <nav>
                <div className='navbar'>
                    <span className="material-symbols-outlined icon-link">
                        dashboard
                    </span>
                    <p><NavLink className='link' to='/dashboard' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>Dashboard</NavLink></p>
                </div>
                <div className='navbar'>
                    <span className="material-symbols-outlined icon-link">
                        contact_page
                    </span>
                    <p><NavLink className='link' to='user' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>User</NavLink></p>
                </div>
                <div className='navbar'>
                    <span className="material-symbols-outlined icon-link">
                        login
                    </span>
                    <p><NavLink className='link' to='login' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>Login</NavLink></p>
                </div>
            </nav>
        </header >
    )
}