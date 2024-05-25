import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const platosPeruanos = [
    {
        name: "Bandeja Paisa",
        slug: 'bandeja-paisa',
        description: "Deliciosa bandeja paisa colombiana.",
        picture: 'https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg'
    },
    {
        name: "Cebiche Piura",
        slug: 'cebiche-piura',
        description: "Fresco cebiche peruano de Piura.",
        picture: 'https://www.peru.travel/Contenido/General/Imagen/es/119/1.1/cebiche-piura.jpg'
    },
    {
        name: "Comida Peruana",
        slug: 'comida-peruana',
        description: "Variedad de platos de comida peruana.",
        picture: 'https://blog.plazavea.com.pe/wp-content/uploads/2022/02/Comida-peruana.jpg'
    },
];

const Main = () => {
    const navigate = useNavigate(); 

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <main>
            <Carousel>
                {
                    platosPeruanos.map(it => (
                        <Carousel.Item key={it.slug} onClick={() => handleClick(it.slug)}>
                            <img src={it.picture} className='d-block w-100' alt={it.name} />
                            <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', padding: '20px' }}>
                                <h3 style={{ fontSize: '2em', marginBottom: '10px' }}>{it.name}</h3>
                                <p style={{ fontSize: '1.25em', marginBottom: '20px' }}>{it.description}</p>
                                <button style={{ fontSize: '1em', padding: '10px 20px', borderRadius: '5px', backgroundColor: 'blueviolet', color: 'white', border: 'none', cursor: 'pointer' }}>Ver detalle</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </main>
    );
};

export default Main;
