import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <img src="../img/littlelemonlogo.jpg" alt="Logo Little Lemon" />
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/`}>Menu</Link></li>
                <li><Link to={`booking`}>Reservations</Link></li>
                <li><Link to={`/`}>Order Online</Link></li>
                <li><Link to={`/`}>Login</Link></li>
                <li><Link to={`/`}>Home</Link></li>
            </ul>
        </nav>
    )
}


