import react from 'react-bootstrap';
import Button from 'react-bootstrap';
import {Modal, ModalHeader, ModalTitle, ModalFooter} from 'react-bootstrap';
import { Component } from 'react';

class Confirmation extends Component() {




  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Submit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe creation sucessful! </Modal.Title>
          </Modal.Header>
          <Modal.Body>You can now view {recipe.title} in the My Recipes tab</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<Confirmation />);