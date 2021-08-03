import React, { useState } from 'react'

import { ModalMovie } from './ModalMovie';

export const CardMovie = ({movie}) => {

    const [show, setshow] = useState(false);

     const handleShow = () =>setshow(true);
     const handleClose = () =>setshow(false);

    return (
           
            <div key={movie.id} className="card" >
                               
                 <img src={movie.img} alt={movie.title} />
                 <div>
                   <h5> {movie.title}</h5>
                   {[...movie.genres]}
                 </div>
                <button onClick={handleShow} className="btn-details"><i className="fas fa-angle-down"></i><br /> More</button>
                <ModalMovie movie={movie} show={show} handleClose={handleClose}/>
            </div>
       
    )
}
