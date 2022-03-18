import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

const ReactModal = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
           <>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>{props.product.title}</Modal.Title>
                    <img src={props.product.image} className='w-50' alt='imgae'></img>
                    </Modal.Header>
                    <Modal.Body>{props.product.description}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
    </>
    );
};

export default ReactModal;