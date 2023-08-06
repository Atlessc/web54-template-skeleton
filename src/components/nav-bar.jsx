import '../styles/nav.css'
import { useState } from 'react'

export default function NavBar() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar-logo">Company</div>
            <div className="nav-menu">
            <div className="nav-btn" onClick={toggleMenu}>menu
            </div>
            {menu && (
                <div className="nav-list">
                    <div className="nav-menu-item">Home</div>
                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Services</div>
                    <div className="nav-menu-item">Contact</div>
                </div>
                )}
            </div>
        </div>
    )
}