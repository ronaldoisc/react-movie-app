import React from 'react';
import Modal from 'react-bootstrap/Modal';
export const ModalMovie = ({movie, show,handleClose}) => {

  
    return (
        <div>
           
            <Modal show={show} onHide={handleClose}  size="lg" >
                 <Modal.Header closeButton>
                    <Modal.Title className="text-dark text-uppercase"><h1>{movie.title}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark modal-body">
                   
                    <img id="foto" src={movie.img} alt="" />
                    <br />
                    <div className="modal-descripcion">
                        <div>
                           <h4> Year:  {movie.year}</h4>
                           <p>{movie.summary}</p>
                        </div>

                        <div>
                           <p> <span>Genre:</span>  {[...movie.genres]}</p> 
                           <p> <span>Slug:</span>  {movie.slug}</p>
                        </div>
                    </div>
                    </Modal.Body>
                
                  </Modal>
        </div>
    )
}
