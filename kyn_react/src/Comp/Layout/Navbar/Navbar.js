import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import shopImage from "../../../Images/shop.png"
import AuthContext from "../../Context/auth-context";
import { useContext } from "react";

import "../Navbar/Navbar.css"

const NavBar = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/login");
    };

    const userData = localStorage.getItem("userData");
    let name = "";
    let email = "";

    if (userData) {
        const userObj = JSON.parse(userData);
        name = userObj.name;
        email = userObj.email;
    }

        console.log(name, email);
    


    return (
        <div>
            <Navbar className={props.className} style={{ backgroundColor: '#00cba9', height: '80px' }}>
                <Container>
                    <NavLink className="navbar-brand fw-bold text-white">
                        <img src={shopImage} alt="shop" style={{ height: '40px' }} />
                        KYN
                    </NavLink>

                    {/* Menu */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav justify-content-end" />
                    <Nav>
                        <NavLink activeclassname="active"
                            className="nav-link text-uppercase fw-bold text-white me-3"
                            to="/kyn">
                            Home
                        </NavLink>

                        <NavLink activeclassname="active"
                            className="nav-link text-uppercase fw-bold text-white me-3"
                            to="/stores">
                            Stores
                        </NavLink>

                        <NavLink activeclassname="active"
                            className="nav-link text-uppercase fw-bold text-white me-3"
                            to="/about-us">
                            About Us
                        </NavLink>
                        <NavLink activeclassname="active"
                            className="nav-link text-uppercase fw-bold text-white me-3"
                            to="/contact-us">
                            Contact Us
                        </NavLink>

                        {!authCtx.isLoggedIn && (
                            <>
                                <Link to="/login">
                                    <Button className="me-0 me-md-3 mb-md-0 mb-3" style={{ backgroundColor: '#4771cb' }}>
                                        Login
                                    </Button>
                                </Link>

                                <Link to="/register">
                                    <Button className="me-0 me-md-3 mb-md-0 mb-3" style={{ backgroundColor: '#4771cb' }}>
                                        Register
                                    </Button>
                                </Link>
                            </>
                        )}

                        {authCtx.isLoggedIn && (
                            <>
                                <Button
                                    style={{ backgroundColor: '#4771cb' }}
                                    className="mb-sm-0 mb-3"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </Button>

                                <h6 className="px-3 text-uppercase fw-bold text-white me-3">{name} <br></br> {email}</h6>

                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar