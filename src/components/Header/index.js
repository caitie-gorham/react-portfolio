import React from "react";
import "../Header/style.css"

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <div className="container-md">
                        <button className="navbar-brand-name" href="#">Caitie Gorham</button>
                        <div class="navbar-collapse collapse justify-content-stretch">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/portfolio">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header;