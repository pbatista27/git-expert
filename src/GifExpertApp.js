import React, {useState} from 'react';
import AddCategoria from './component/AddCategoria';
import GifGrid from './component/GifGrid';



const GifExpertApp = () => {

    const [categoria, setcategoria] = useState(['dragon ball']);

    return(
        <>
        <h3>GifExpertApp</h3>
        <AddCategoria setcategoria = {setcategoria} />
        <hr />
            {
                categoria.map(categoria => ( 
                    <GifGrid key={categoria} categoria = {categoria} />
                ))
            }
        </>
    )

} 



export default GifExpertApp;