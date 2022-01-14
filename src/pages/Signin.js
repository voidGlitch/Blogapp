import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Grid, Panel, Button } from "rsuite";

const Signin = () => {
  //tell React that your component needs to do something after render.

  return (
    <div className="bg-grad">
      <Container>
        <Grid className="mt-3">
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              {/* panel use gives padding */}
              <Panel className="text-center mt-mid">
                <h1>Welcome to the Blog-app</h1>
                <p>An intractive app filled with your memories</p>
                <Link to="/login">
                  <Button appearance="primary" className="mt-mid w-100">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button appearance="primary" className="mt-3 w-100">
                    SignUp
                  </Button>
                </Link>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Signin;
