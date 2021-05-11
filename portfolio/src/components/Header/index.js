import React from "react";
import "../Header/style.css"

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <div className="container-md">
                        <button className="navbar-brand-name" href="#">Caitie Gorham</button>
                        <div class="ml-auto navbar-nav navbar-nav-links">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                            <a className="nav-link" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header;