import { useState } from "react";
import { Button, Col, Modal, Form, InputGroup } from "react-bootstrap";

import postSheetRow from './utils/postSheetRow';

const PledgeButton = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [twitter, setTwitter] = useState("")
  const [amountValidation, setAmountValidation] = useState("");
  const [dateValidation, setDateValidation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePost = async (e) => {
    if (amount === "") {
      setAmountValidation("You must enter how much you pledged");
      return;
    }

    if (isNaN(parseInt(amount))) {
      setAmountValidation("Amount must a number");
      return;
    
    }

    if (date === "") {
      setDateValidation("Please enter the date you bought the sats for your pledge")
      return;
    }
    e.preventDefault();

    setAmountValidation("");
    setDateValidation("");

    const data = {
      name: name || "Satoshi",
      date,
      amount
    }

    try {
      const response = await postSheetRow(data);
      setShow(false);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Button className="pledge-button" onClick={handleShow}>Pledge</Button>
    </Col>
      <Modal data-bs-theme="dark" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Let's Show Them Your Pledge!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name <span className="optional-input">(optional)</span></Form.Label>
              <Form.Control 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                type="text"
                placeholder="Satoshi" 
              />
              <Form.Text className="text-muted">
                (feel free to leave blank and stay anon)
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Pledged*</Form.Label>
              <Form.Control onChange={(e) => setDate(e.target.value)} type="date" value={date}/>
              <div className="form-error">{dateValidation}</div>

            </Form.Group>

             <Form.Label className="mt-4">Amount Pledged*</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="10000"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                aria-label="Amount pledged"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">sats</InputGroup.Text>
            </InputGroup>
              <div className="form-error">{amountValidation}</div>

              <Form.Group>
                <Form.Label>Twitter <span className="optional-input">(optional)</span></Form.Label>
                <Form.Control
                  placeholder="@satoshi"
                  onChange={(e) => setTwitter(e.target.value)}
                  value={twitter}
                />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button className="submit-btn" variant="primary" onClick={(e) => handlePost(e)}>
            Post Your Pledge
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PledgeButton;
