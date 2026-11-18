import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export default () =>
  import.meta.env.REACT_APP_LOGO || import.meta.env.REACT_APP_NAME ? (
    <Header>
      {import.meta.env.REACT_APP_LOGO ? (
        <Logo
          src={import.meta.env.REACT_APP_LOGO}
          alt={import.meta.env.REACT_APP_NAME}
        />
      ) : (
        <Title>{import.meta.env.REACT_APP_NAME}</Title>
      )}
    </Header>
  ) : null;
