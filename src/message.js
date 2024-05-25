import React from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
    const { slug } = useParams();
    
    const plato = {}; g

    return (
        <div>
            <h1>{plato.name}</h1>
            <p>{plato.description}</p>
            {}
        </div>
    );
};

export default Single;