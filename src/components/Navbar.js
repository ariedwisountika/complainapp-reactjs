import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">ADMIN PENGADUAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/FormData">Form Data</Nav.Link>
          {/* <Nav.Link href="/FormData2">Form Data2</Nav.Link>
          <Nav.Link href="/StatusData">Status Data</Nav.Link> */}
          <DropdownButton id="dropdown-basic-button" title="Informasi">
            <Dropdown.Item href="/InformasiData">Informasi Data</Dropdown.Item>
            <Dropdown.Item href="/InformasiStatus">
              Informasi Status Pelaporan
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
