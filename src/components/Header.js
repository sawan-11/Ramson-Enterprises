import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <section className="container main-container" id="home">
          <div className="row">
            {/* --------------------- main-header-left -------------------------*/}

            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1
                className="display-2"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                We made Online Order <br /> Easy for You.
              </h1>
              <p
                className="main-para"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                <li>From here you can order chemicals directly.</li>
                <li>
                  this is online payment method you can pay via upi or any other
                  online money transfer.
                </li>
              </p>
              <h3
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                Get early access to {props.title}
              </h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                  name=""
                  id=""
                  placeholder="Enter Your number"
                />
                <a className="input-group-button" href="/">
                  <i class="fas fa-arrow-alt-circle-right"></i>
                </a>
              </div>
            </div>

            {/* --------------------- main-header-right -------------------------*/}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-section-images">
              <img
                src="./images/main-chemical.jpg"
                alt="main-img"
                className="img-fluid"
              ></img>
              <img
                src="./images/main-chemical-1.jpg"
                alt="main-img"
                className="img-fluid main-section-img2"
              ></img>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default Header;
