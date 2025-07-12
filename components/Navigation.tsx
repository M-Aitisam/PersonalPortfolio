import { useState, useEffect, useRef } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const navbarRef = useRef<HTMLDivElement>(null);
  const headroomInstance = useRef<Headroom | null>(null);

  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    if (!navbarRef.current) return;

    try {
      // Initialize Headroom with default options
      headroomInstance.current = new Headroom(navbarRef.current, {
        tolerance: {
          down: 10,
          up: 20
        },
        offset: 100,
        classes: {
          initial: "headroom",
          pinned: "headroom--pinned",
          unpinned: "headroom--unpinned",
          top: "headroom--top",
          notTop: "headroom--not-top",
          bottom: "headroom--bottom",
          notBottom: "headroom--not-bottom"
        }
      });

      // Initialize Headroom
      headroomInstance.current.init();

      return () => {
        // Safely destroy Headroom instance
        if (headroomInstance.current) {
          try {
            headroomInstance.current.destroy();
          } catch (e) {
            console.warn("Error destroying Headroom:", e);
          }
          headroomInstance.current = null;
        }
      };
    } catch (error) {
      console.error("Headroom initialization error:", error);
    }
  }, []);

  const socialIcons = [
    { key: "facebook", icon: faFacebook },
    { key: "instagram", icon: faInstagram },
    { key: "github", icon: faGithub },
    { key: "linkedin", icon: faLinkedin },
    { key: "twitter", icon: faTwitter }
  ];

  return (
    <header className="header-global">
      <div ref={navbarRef}>
        <Navbar
          className="navbar-main navbar-transparent navbar-light" 
          expand="lg" 
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            
            <button 
              className="navbar-toggler" 
              aria-label="Toggle navigation"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialIcons.map(({ key, icon }) => (
                  socialLinks[key] && (
                    <NavItem key={key}>
                      <NavLink
                        rel="noopener noreferrer"
                        aria-label={key}
                        className="nav-link-icon"
                        href={socialLinks[key]}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={icon} />
                        <span className="nav-link-inner--text d-lg-none ms-2">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                      </NavLink>
                    </NavItem>
                  )
                ))}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Navigation;