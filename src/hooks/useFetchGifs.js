import { useState, useEffect } from "react"
import  getGifs  from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({
        loanding : true,
        data: []
    });

    useEffect(() => {
        getGifs(categoria)
        .then( img => setstate({
            loanding: false,
            data: img
        }));
    },[ categoria ]);

    return state;
} 