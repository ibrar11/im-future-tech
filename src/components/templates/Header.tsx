import React from "react";
import { Container, TopBanner, NavBar } from "..";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-col gap-y">
          <TopBanner />
          <NavBar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
