import React from "react";
import { Container, Form, Button, Col, Card } from "react-bootstrap";

function ContactForm(props) {
  const userName = React.useRef();
  const userEmail = React.useRef();
  const userAddress = React.useRef();
  const userCity = React.useRef();
  const userCountry = React.useRef();
  const userMessage = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const usersName = userName.current.value;
    const usersEmail = userEmail.current.value;
    const usersAddress = userAddress.current.value;
    const usersCity = userCity.current.value;
    const usersCountry = userCountry.current.value;
    const usersMessage = userMessage.current.value;

    const userToSave = {
      name: usersName,
      email: usersEmail,
      addres: usersAddress,
      city: usersCity,
      country: usersCountry,
      mesage: usersMessage
    };
    props.onChange(userToSave);
    console.log(userToSave);
  }

  return (
    <div className="my-2">
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={userName}
                placeholder="Enter your name.."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={userEmail}
                placeholder="Enter your email.."
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter your address.."
              ref={userAddress}
              as="textarea"
              rows={2}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter your city.." ref={userCity} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="Enter your country."
                ref={userCountry}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label> Message</Form.Label>
            <Form.Control
              placeholder="Enter your message.."
              ref={userMessage}
              as="textarea"
              rows={2}
            />
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ContactForm;
