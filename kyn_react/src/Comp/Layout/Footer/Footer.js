const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container-fluid py-5" style={{backgroundColor: '#00cba9'}}>
                        <div className="row">

                            <div className="col-lg-3 col-md-6" style={{marginLeft: '32px'}}>
                                <div className="footer-white">
                                    <h3>ABC Car<span>.</span></h3>
                                    <p>
                                        A108 Adam Street <br></br>
                                        NY 535022, USA<br></br><br></br>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="about-us">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="contact-us">Contact us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="stores">View all store</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="addStore">Post Store</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="register">Sign Up</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="login">Sign In</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="regulations">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-white">
                                    <p>
                                        <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                        <strong>Email:</strong> info@kyn.com<br></br>
                                    </p>
                                </div>
                                <div>
                                    <a href="" className="me-4 text-reset"> <i className="fab fa-facebook-f"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-twitter"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-google"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-instagram"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-linkedin"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="container py-3">
                            <div className="copyright text-center">
                                &copy; Copyright <strong><span>KYN</span></strong>. All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer