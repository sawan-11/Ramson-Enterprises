import React, { useState } from "react";

import { Link } from "react-scroll";

const Navbar = (props) => {
  const [user, setUser] = useState(true);

  return (
    <>
      <section className="navbar-bg">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}
        >
          <div className="container">
            <Link
              class="navbar-brand"
              to="home"
              smooth={true}
              duration={1000}
              style={{ color: props.mode === "dark" ? "#eeeef0" : "black" }}
            >
              {props.title}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="home"
                    smooth={true}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="service"
                    smooth={true}
                    duration={1000}
                  >
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="about"
                    smooth={true}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="contact"
                    smooth={true}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                {!user ? (
                  <>
                    {/* <button class="btn btn-style">Logout</button>
                    <p
                      className="display-6"
                      style={{
                        color: props.mode === "dark" ? "#eeeef0" : "black",
                      }}
                    >
                      hii, user
                    </p> */}
                  </>
                ) : (
                  <>
                    {/* <button to="./pages/SignUp" class="btn btn-style">
                      sign in
                    </button>
                    <button class="btn btn-style2">Log in</button> */}
                  </>
                )}

                <div
                  class={`form-check form-switch text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleMode}
                  />
                  <label
                    class="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark mode
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
