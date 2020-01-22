// React Imports
import React from "react";

import { Row, Form, Col, Button } from "react-bootstrap";

function Input() {
  return (
    <Row>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}

export default Input;
