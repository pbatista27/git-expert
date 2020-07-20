import React from 'react';
const { default: GifGridItem } = require("../component/GifGridItem")

describe('prueba del GifGridItem', () => {

    

    test('GifGridItem', () => {

        const title = 'titulo';
        const url = 'https://hola.jpg';

        const GifGridItemTest = ({title, url}) => {

            return(
                <div className='card'>
                    <img src={url} alt={title} />
                    <p>{title}</p>
                </div>
            );

        };

        const dataComponentTest = GifGridItemTest({title,url});

        const dataComponent = GifGridItem({title, url});

        expect(dataComponentTest).toEqual(dataComponent);

        
    })
    
    
})
