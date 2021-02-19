import React from "react";
import {
  Container,
  Form,
  Button,
  Col,
  ListGroup,
  Accordion,
  Card
} from "react-bootstrap";

function ListItem(props) {
  const listName = React.useRef();

  function deleteContact(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <div>
      <Container>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                ref={listName}
                variant="link"
                eventKey="0"
              >
                {props.contactObject.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="d-flex justify-content-end mb-2">
                  <Button
                    onClick={deleteContact}
                    variant="danger"
                    className="mr-2"
                  >
                    Delete
                  </Button>{" "}
                  <Button variant="success">Edit</Button>
                </div>
                <ListGroup>
                  <ListGroup.Item>
                    <b>Name:</b> {props.contactObject.name}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>Email:</b> {props.contactObject.email}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>Address:</b> {props.contactObject.address}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>City:</b> {props.contactObject.city}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>Country:</b> {props.contactObject.country}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <b>Message:</b> {props.contactObject.message}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
}

export default ListItem;
