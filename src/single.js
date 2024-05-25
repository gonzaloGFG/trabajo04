import React from 'react';
import { useParams } from 'react-router-dom';

const platosPeruanos = [
    {
        name: "Bandeja Paisa",
        slug: 'bandeja-paisa',
        description: "La Bandeja Paisa es un plato típico de la gastronomía colombiana. Consiste en una combinación de arroz, frijoles, carne molida, chicharrón, huevo frito, aguacate, plátano maduro y arepa. Es conocida por su gran cantidad de ingredientes y su sabor abundante y satisfactorio.",
        picture: 'https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg'
    },
    {
        name: "Cebiche Piura",
        slug: 'cebiche-piura',
        description: "El Cebiche Piura es una variedad de cebiche peruano originario de la región de Piura. Se prepara con pescado fresco cortado en trozos pequeños y marinado en jugo de limón, acompañado de cebolla roja, ají limo, cilantro y otros ingredientes. Es refrescante, cítrico y muy popular en la costa peruana.",
        picture: 'https://www.peru.travel/Contenido/General/Imagen/es/119/1.1/cebiche-piura.jpg'
    },
    {
        name: "Comida Peruana",
        slug: 'comida-peruana',
        description: "La Comida Peruana es conocida por su diversidad y riqueza gastronómica. Incluye platos como el ceviche, el ají de gallina, el lomo saltado, el rocoto relleno, el cuy chactado, entre otros. Destaca por sus sabores intensos, el uso de ingredientes autóctonos como la quinua y la variedad de técnicas de preparación.",
        picture: 'https://blog.plazavea.com.pe/wp-content/uploads/2022/02/Comida-peruana.jpg'
    },
];

const Single = () => {
    const { slug } = useParams();
    const plato = platosPeruanos.find(item => item.slug === slug);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={plato.picture} alt={plato.name} style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }} />
                <div style={{ marginLeft: '20px' }}>
                    <h1>{plato.name}</h1>
                    <p>{plato.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Single;
