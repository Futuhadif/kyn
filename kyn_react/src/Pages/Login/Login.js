import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from "react";
import AuthContext from "../../Comp/Context/auth-context";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import NavBar from "../../Comp/Layout/Navbar/Navbar";
import Footer from "../../Comp/Layout/Footer/Footer";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const inputUsernameRef = useRef();
    const inputPasswordRef = useRef();

    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState("");

    // SUBMIT HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputUsername = inputUsernameRef.current.value;
        const inputPassword = inputPasswordRef.current.value;

        console.log(inputUsername);
        console.log(inputPassword);

        axios
            .post("http://localhost:8080/api/auth/login", {
                username: inputUsername,
                password: inputPassword,
            })
            .then((res) => {
                console.log(res.data);
                setLoginStatus("SUCCESS");
                authCtx.login(res.data.accessToken);
                authCtx.isLoggedIn = true;

                    localStorage.setItem('userData', JSON.stringify(res.data));

               

                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
                setLoginStatus("FAILED");
            });

        inputUsernameRef.current.value = "";
        inputPasswordRef.current.value = "";
    };

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            handleGoogleLogin(codeResponse);
        },
        onError: (error) => console.log("Login Failed:", error),
    });

    const handleGoogleLogin = (codeResponse) => {
        axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setProfile(res.data);
                const accessToken = res.data.access_token; // Adjust this based on the response data
                setLoginStatus("SUCCESS");
                authCtx.login(accessToken);
                console.log(codeResponse.access_token);
                authCtx.isLoggedIn = true;
                navigate("/");
                                    localStorage.setItem('userData', JSON.stringify(res.data));


            })
            .catch((err) => console.log(err));
    };

    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };

    return (
        <div>
            <NavBar></NavBar>

            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: "23rem" }} onSubmit={onSubmitHandler}>
                                    <h2 className="text-center mt-5">Continue to login</h2>
                                    <hr className="mb-5"></hr>

                                    {loginStatus === "FAILED" && (
                                        <div className="form-error text-center">
                                            username or password is invalid
                                        </div>
                                    )}

                                    <div className="form-outline mb-4 ">
                                        <div className="form-floating">
                                            <input
                                                ref={inputUsernameRef}
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Your Username"
                                                required
                                            ></input>
                                            <label htmlFor="email">Your Username</label>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <div className="form-floating">
                                            <input
                                                ref={inputPasswordRef}
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Your Password"
                                                required
                                            ></input>
                                            <label htmlFor="password">Your Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button
                                            className="btn btn-outline-primary py-3 mb-3"
                                            type="submit"
                                            style={{ width: "100%" }}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    <div className="social-login mb-3">
                                        <button
                                            className="btn btn-outline-primary py-3 mb-3"
                                            type="button"
                                            style={{ width: "100%" }}
                                            onClick={() => login()}
                                        >
                                            Sign in with Google
                                        </button>
                                    </div>

                                    <p>
                                        Don't have an account?{" "}
                                        <a href="/register" className="link-primary">
                                            Register here
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1685691473~exp=1685692073~hmac=5515fb65485cf463bd530c178e89b96c1a48e286e5ea5f0baa3398021547e06c"
                                alt="Login"
                                className="w-100 vh-100"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                            ></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Login;
