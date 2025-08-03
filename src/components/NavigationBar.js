import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      variant="light"
      expand="lg"
      fixed="top"
      bg="light"
      className={`py-3 ${scrolled ? "shadow-sm" : ""}`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <Navbar.Brand href="#home" className="fw-bold ms-3">
        Agritech Ventures
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" active={activeLink === "home"}>
            Home
          </Nav.Link>
          <Nav.Link href="#introduction" active={activeLink === "introduction"}>
            Introduction
          </Nav.Link>
          <Nav.Link href="#about" active={activeLink === "about"}>
            About
          </Nav.Link>
          <Nav.Link href="#get-involved" active={activeLink === "get-involved"}>
            Get Involved
          </Nav.Link>
          <Nav.Link href="#services" active={activeLink === "services"}>
            Services
          </Nav.Link>
          <Nav.Link
            href="#halal-investment"
            active={activeLink === "halal-investment"}
          >
            Investment
          </Nav.Link>
          <Nav.Link href="#changemaker" active={activeLink === "changemaker"}>
            Impact
          </Nav.Link>
          <Nav.Link href="#get-started" active={activeLink === "get-started"}>
            Journey
          </Nav.Link>
          <Nav.Link href="#join-us" active={activeLink === "join-us"}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav className="ms-3">
          <Button variant="success" href="#get-started">
            Get Started
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
