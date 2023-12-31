import React from "react";

export const Navbar = () => {
    return (
        <header className="site-header sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Passion 2 Read</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search Books</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        <button className="btn btn-outline-light" type="button">Sign in</button>
                     </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}