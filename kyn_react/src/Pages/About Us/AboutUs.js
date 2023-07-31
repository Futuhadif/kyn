import Footer from "../../Comp/Layout/Footer/Footer"
import NavBar from "../../Comp/Layout/Navbar/Navbar"

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="about">
        <div class="container">

          <div className="section-title mt-5 text-center">
            <h3>Learn More <span style={{ color: '#FF4F6B' }}>About Us</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" class="btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5" style={{ backgroundColor: '#00cba9' }}>
          <h3 className="text-center mb-4" style={{ paddingTop: '50px' }}>What They Say About Us?</h3>
          <div class="row px-5" style={{ paddingBottom: '50px' }}>
            <div class="col-sm-3 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: '#FF4F6B' }}>Ghumaisha</h5>
                  <hr></hr>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: '#FF4F6B' }}>Hengico</h5>
                  <hr></hr>
                  <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: '#FF4F6B' }}>Abraham</h5>
                  <hr></hr>
                  <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: '#FF4F6B' }}>Beiggie</h5>
                  <hr></hr>
                  <p class="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row align-items-start">
            <div class="col-6">
              <img src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?t=st=1685420822~exp=1685421422~hmac=29d642d6e6128f00d6bca2399c1095196a96346fb6a1260a40642217d674d1eb"
                style={{ width: '70%' }} alt="content"></img>
            </div>
            <div class="col-6 py-5">
              <h3 className="text-center">Our Vision & Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div class="row align-items-start">
                <div class="col text-left">
                  <h4>Corporis voluptates sit</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="col">
                  <h4>Ullamco laboris nisi</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default About