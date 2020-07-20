import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({categoria}) => {

    const {loanding, data:imagenes} = useFetchGifs(categoria);

    return(
        <>
        <h4>{categoria}</h4>
        { loanding&& 'cargando...'}
        <div className='card-grid'>
            {
                imagenes.map( img => (
                <GifGridItem key={img.id} 
                {...img}
                />
                ))
            }
        </div>
        </>
    );
}


export default GifGrid;