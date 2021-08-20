import React from "react";

const Footer = (props) => {
  const time = new Date();
  return (
    <>
      <footer class="footer-section">
        <div className="">
          <div class="container">
            <div class="row py-4 d-flex align-items-center">
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h5
                  class="mb-0 sub-heading"
                  style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
                >
                  Get connected with us on social networks!
                </h5>
              </div>
              <div class="col-md-6 col-lg-7 text-center">
                <a class="fb-ic" href="/facebook.com">
                  <i class="fab fa-facebook-f footer-icon"> </i>
                </a>
                <a class="tw-ic footer-icon" href="/twitter.com">
                  <i class="fab fa-twitter white-text mr-4"> </i>
                </a>
                <a class="gplus-ic footer-icon" href="/google.com">
                  <i class="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                <a class="li-ic footer-icon" href="/linkedin.com">
                  <i class="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                <a class="ins-ic footer-icon" href="/instagram.com">
                  <i class="fab fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center text-md-left mt-5">
          <div
            class="row mt-3"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                class="sub-heading"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                {props.title}
              </h6>
              <hr />
              <p class="main-para-footer">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                class="sub-heading"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                Products
              </h6>
              <hr />
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  MDBootstrap
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  MDWordPress
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  BrandFlow
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  Bootstrap Angular
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                class="sub-heading"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                Useful links
              </h6>
              <hr />
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  Your Account
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  Become an Affiliate
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  Shipping Rates
                </a>
              </p>
              <p class="main-para-footer">
                <a class="footer-link" href="#!">
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                class="sub-heading"
                style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
              >
                Contact
              </h6>
              <hr />
              <p class="main-para-footer">
                <i class="fas fa-home mr-3"></i> Mumbai,india 400101
              </p>
              <p class="main-para-footer">
                <i class="fas fa-envelope mr-3"></i> info@Ramseychemicals.com
              </p>
              <p class="main-para-footer">
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p class="main-para-footer">
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3 main-para-footer">
          © {time.getFullYear()} {props.title} Copyright
        </div>
      </footer>
    </>
  );
};

export default Footer;
