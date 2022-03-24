import React from 'react'
import NavLogo from '../images/nav-logo.png'

export default function Nav() {
    return (
        <div className="nav">
            <img src={NavLogo} />
            <h3>my travel journal.</h3>
        </div>
    )
}