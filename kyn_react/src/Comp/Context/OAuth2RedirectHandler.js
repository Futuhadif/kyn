import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "./auth-context";

const OAuth2RedirectHandler = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const token = params.get("token");
    const error = params.get("error");

    useEffect(() => {
        if (token) {
            authCtx.login(token);
            navigate("/stores");
        }

        if (error) {
            navigate("/login");
        }
    }, [authCtx, error, navigate, token]);

    return (
        <></>
    );
}

export default OAuth2RedirectHandler;