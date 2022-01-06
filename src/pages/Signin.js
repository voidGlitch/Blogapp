import React from "react";
import { Container, Row, Col, Grid, Panel } from "rsuite";

const Signin = () => {
  //tell React that your component needs to do something after render.

  return (
    <Container>
      <Grid className="mt-3">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            {/* panel use gives padding */}
            <Panel className="text-center">
              <h1>Welcome to the Blog-app</h1>
              <p>An intractive app filled with your memories</p>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
