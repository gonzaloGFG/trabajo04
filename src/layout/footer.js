import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5>Menú</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/menu">Ver menú</Link></li>
                            <li><Link to="/promociones">Promociones</Link></li>
                            <li><Link to="/reservaciones">Reservaciones</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Horario de atención</h5>
                        <p>Lunes a Viernes: 10:00 am - 10:00 pm</p>
                        <p>Sábados y Domingos: 11:00 am - 8:00 pm</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Contacto</h5>
                        <p>Dirección: Av. Principal razuri</p>
                        <p>Teléfono: (+51) 456-7890</p>
                        <p>Email: la chilenita@restaurante.com</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-secondary py-2">
                <div className="container">
                    <p className="m-0 text-center">© 2024 Restaurante la chilena. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
