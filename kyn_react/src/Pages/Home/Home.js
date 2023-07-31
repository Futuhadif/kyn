import Footer from "../../Comp/Layout/Footer/Footer";
import NavBar from "../../Comp/Layout/Navbar/Navbar";
import bannerImage from "../../Images/banner.png";
import "../../Pages/Home/Home.css"

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                                <div className="info-stat">
                                                    <h6>Welcome to our website</h6>
                                                    <h2>Know Your Neighborhood</h2>
                                                    <hr></hr>
                                                    <p>Scelerisque purus semper eget duis at tellus at urna. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
                                                    <a href="/" class="btn me-md-2 text-white" type="button" style={{ backgroundColor: '#4771cb' }}>Get Started</a>

                                                </div>
                                            </div>

                                <div className="col-lg-6" style={{paddingTop: '100px'}}>
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src={bannerImage} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home