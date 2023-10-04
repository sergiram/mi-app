import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <img src="../img/littlelemonlogo.jpg" alt="Logo Little Lemon" />
            <ul>
                <li><Link to={`#home`}>Home</Link></li>
                <li><Link to={`#home`}>Menu</Link></li>
                <li><Link to={`#home`}>Reservations</Link></li>
                <li><Link to={`#home`}>Order Online</Link></li>
                <li><Link to={`#home`}>Login</Link></li>
                <li><Link to={`#home`}>Home</Link></li>
            </ul>
        </nav>
    )
}


