import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Container from "@material-ui/core/Container";

export default () => {
  return (
      <React.Fragment>
          <Header/>
          <Container>
            <Main/>
          </Container>
      </React.Fragment>
  );
}
