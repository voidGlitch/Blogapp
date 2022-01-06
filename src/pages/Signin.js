import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Grid, Panel } from "rsuite";
import blogContext from "../context/blog/blogContext";

const Signin = () => {
  const a = useContext(blogContext);
  //tell React that your component needs to do something after render.
  useEffect(() => {
    a.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Grid className="mt-3">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            {/* panel use gives padding */}
            <Panel className="text-center">
              <h1>Welcome to the Blog-app</h1>
              <p>
                An intractive app filled with your memories {a.state.name} and
                study in
                {a.state.class}
              </p>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
