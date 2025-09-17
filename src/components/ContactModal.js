import { Modal, Button } from "react-bootstrap";

export default function ContactModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Email: <a href="c.wnt.nd1053@gmail.com">your.email@example.com</a>
        </p>
        <p>Phone: +49 152 1025 7226</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/LanaD-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/LanaD-coder
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
