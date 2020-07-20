import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategoria = ({setcategoria}) => {

    const [inputvalue, setinputvalue] = useState('');

    const hanlendChange = (e) => {
        setinputvalue(e.target.value);
    }

    const enviarCategoria = (e) => {
        e.preventDefault();
        if(inputvalue.trim().length > 2){
            setcategoria( categoria => [inputvalue, ...categoria]);
            setinputvalue('');
        }
    }

    return(
        <form onSubmit={enviarCategoria}>

        <input type='text' name='categoria' onChange={hanlendChange} value={inputvalue} />
        
        </form>
    );
}

AddCategoria.prototype = {
    setcategoria : PropTypes.func.isRequired,
    inputvalue : PropTypes.string.isRequired
}

export default AddCategoria;