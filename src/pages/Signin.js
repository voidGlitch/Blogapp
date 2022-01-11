import React from "react";
import { Container, Row, Col, Grid, Panel, Button } from "rsuite";

const Signin = () => {
  //tell React that your component needs to do something after render.

  return (
    <Container>
      <Grid className="mt-3">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            {/* panel use gives padding */}
            <Panel className="text-center mt-mid">
              <h1>Welcome to the Blog-app</h1>
              <p>An intractive app filled with your memories</p>
              <Button appearance="primary" className="mt-page w-100">
                Login
              </Button>
              <Button appearance="primary" className="mt-3 w-100">
                SignUp
              </Button>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
