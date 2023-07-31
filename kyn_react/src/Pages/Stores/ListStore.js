import Footer from "../../Comp/Layout/Footer/Footer";
import NavBar from "../../Comp/Layout/Navbar/Navbar";
import storeImage from "../../Images/store.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const ListStore = () => {
    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        fetchStoreList();
    }, []);

    const fetchStoreList = () => {
        axios
            .get("http://localhost:8080/api/store/allStore")
            .then((response) => {
                setStoreList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <NavBar></NavBar>

            <div className="container-fluid" style={{ backgroundColor: '#76b3b8' }}>
                <div class="container py-5">
                    <div class="row align-items-start">
                        <div class="col-6">
                            <img src={storeImage}
                                style={{ width: '70%' }} alt="content"></img>
                        </div>
                        <div class="col-6 py-5">
                            <h2 className="text-center text-white">Find a store you're looking for or start adding your store</h2>
                            <hr></hr>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="/addStore" class="btn me-md-2 text-white" type="button" style={{ backgroundColor: '#4771cb' }}>Add Store</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {storeList.map((store) => (
                    <div className="col-sm-4 mb-3 mb-sm-0 py-2">
                        <div className="card shadow" style={{ backgroundColor: '#ffd545' }}>
                            <img className="card-img-top" src={storeImage} alt="store"/>
                            <div key={store.id} className="card-body">
                                <h3 className="card-title text-center">{store.name}</h3>
                                <p className="text-center">
                                    Prices are all-inclusive,
                                    Above-standard security,
                                    Complete Comfort,
                                    Updated Aesthetics
                                </p>
                                <h4 className="card-text text-danger">{store.location}</h4>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className="btn btn-dark">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer></Footer>
        </div>
    )
}

export default ListStore