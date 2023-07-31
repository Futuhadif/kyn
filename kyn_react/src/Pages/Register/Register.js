import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../Comp/Layout/Navbar/Navbar";
import Footer from "../../Comp/Layout/Footer/Footer";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      registrationComplete: false,
    };
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  emailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  register = (event) => {
    event.preventDefault();
    alert(this.state.name + " " + this.state.username + " " + this.state.email + " " + this.state.password );

    axios
      .post('http://localhost:8080/api/user/register', this.state)

      .then(res => {
        console.log(res.data);
        this.setState({ registrationComplete: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.registrationComplete) {
      return (
        <div>
          <NavBar></NavBar>
          <div className="container-fluid">
            <div class="container py-5">
              <div class="row align-items-start">
                <div class="col-6">
                  <img src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-496.jpg?w=740&t=st=1685638689~exp=1685639289~hmac=0d59d9e510791abdce8d429f09f45f10dc9393faf0be553e2a819cf1d516ef03"
                    style={{ width: '70%' }} alt="success"></img>
                </div>
                <div class="col-6 py-5">
                  <h2 className="text-center">Thank You for Registering!</h2>
                  <hr></hr>
                  <p>You have successfully registered.  Start to find or post your store? <a href="/login" className="link-primary">Continue</a></p>
                  </div>
                </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar></NavBar>
          <div className="container-xxl py-5">
            <div className="container px-lg-5">
              <div className="row justify-content-center">
                <div className="col-lg-7 mb-5">
                  <h2 className="mt-2 text-center">Start to create new account</h2>
                  <hr></hr>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <form onSubmit={this.register}>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control"
                            id="name" placeholder="Your Name"
                            value={this.state.name}
                            onChange={this.nameChange} required></input>
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="email" className="form-control"
                            id="email" placeholder="Your Email"
                            value={this.state.email}
                            onChange={this.emailChange} required></input>
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="password" className="form-control"
                            id="password" placeholder="Your Password"
                            value={this.state.password}
                            onChange={this.passwordChange} required></input>
                          <label htmlFor="password">Your Password</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control"
                            id="username" placeholder="Your Username"
                            value={this.state.username}
                            onChange={this.usernameChange} required></input>
                          <label htmlFor="address">Your Username</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="mt-3 text-center">
                    <p>Already have an account? <a href="/login" className="link-primary">Login here</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
    }
  }
}

export default Register;

