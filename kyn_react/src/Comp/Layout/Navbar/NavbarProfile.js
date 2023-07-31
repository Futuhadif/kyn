import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import "../Navbar/Navbar.css"


const userImage =
    "https://scontent.fdps5-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c94.0.320.320a_dst-jpg_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=UmZNJ3g2P7wAX825NN5&_nc_ht=scontent.fdps5-1.fna&edm=AP4hL3IEAAAA&oh=00_AfDllgfXZJncqvVi8QbcTByKeVtQKqdyTiUW8XzahsQqCg&oe=63CE5099";

const NavbarProfile = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/login");
    };

    return (
        <ul className="navbar-nav fw-semibold">
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle d-flex align-items-center text-dark"
                    href="#user"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <div className="nav-account me-2">
                        <img src={userImage} alt="Profile" />
                    </div>
                    {authCtx.name}
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="ps-2 pe-2">
                        <Button
                            variant="danger"
                            className=" nav-logout"
                            onClick={logoutHandler}
                        >
                            Logout
                        </Button>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default NavbarProfile;