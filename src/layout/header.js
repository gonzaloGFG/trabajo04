import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex">
                            {/* Reemplazar los botones de "Atrás" y "Adelante" con un enlace de inicio */}
                            <Link to="/" className="btn btn-primary me-2">Inicio</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;