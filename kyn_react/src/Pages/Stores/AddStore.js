import Footer from "../../Comp/Layout/Footer/Footer";
import NavBar from "../../Comp/Layout/Navbar/Navbar";
import storeImage from "../../Images/store.jpg";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../Comp/Context/auth-context";
import { useNavigate } from "react-router-dom";

const AddStore = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [postStoreStatus, setPostStoreStatus] = useState("");

    const inputNameRef = useRef();
    const inputLocationRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputName = inputNameRef.current.value;
        const inputLocation = inputLocationRef.current.value;

        axios
            .post(
                "http://localhost:8080/api/store/addStore",
                {
                    name: inputName,
                    location: inputLocation,
                    idUser: authCtx.userId,
                },
                {
                    headers: { Authorization: `Bearer ${authCtx.token}` },
                }
            )
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
                setPostStoreStatus("FAILED");
            });

        inputNameRef.current.value = "";
        inputLocationRef.current.value = "";
    };

    //view HTML
        return (
            <div>
                <NavBar></NavBar>
                <main className="container py-5" >
                    <div className="content" >
                        <div className="row align-items-center py-3">

                            <div className="col-6">
                            {postStoreStatus === "FAILED" && (
                            <div className="form-error text-center">Failed to post car</div>
                        )}

                                <h3 className="fs-4 card-title fw-bold mb-4 text-center">Add Store</h3>
                                <form onSubmit={onSubmitHandler}>
                                    <input className="form-control mb-3"
                                        type="text" name="name" placeholder="Name"
                                        ref={inputNameRef} />
                                    <textarea className="form-control mb-3"
                                        type="text" name="location" placeholder="Location"
                                        ref={inputLocationRef} />
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" >
                                            Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6">
                                <img className="card-img-top" src={storeImage} alt="store" />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }

export default AddStore