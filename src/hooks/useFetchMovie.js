import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";

export const useFetchMovie = () =>{
    const [state, setstate] = useState({
        data:[],
        loanding:true
    });

    useEffect(() => {
      getMovies().then(movies =>{
        setstate({
            data:movies,
            loanding:false
        })
      })
       
    }, []);
    return state;
};