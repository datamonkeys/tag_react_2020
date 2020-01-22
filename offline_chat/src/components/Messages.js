// React Imports
import React from "react";

import { Row, Table } from "react-bootstrap";

function Messages() {
  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>@fat</td>
          </tr>
          <tr>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
}

export default Messages;
