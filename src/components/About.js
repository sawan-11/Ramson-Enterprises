import React from "react";

const About = (props) => {
  return (
    <>
      <section className="container main-about-container" id="about">
        <div className="row">
          <h1
            className="text-center main-heading"
            style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
          >
            About Us
          </h1>
          <div className="col-12 col-lg-8 about-left-side d-flex justify-content-center flex-column align-items-start">
            <h1 style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}>
              {props.title}
            </h1>
            <p
              className="main-para"
              style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
            >
              {" "}
              Line 33:25: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
              https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
              jsx-a11y/anchor-is-valid
            </p>
            <p style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}>
              left side
            </p>
            <p style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}>
              left side
            </p>
          </div>

          <div className="col-12 col-lg-4 about-right-side d-flex justify-content-center flex-column align-items-start">
            <figure>
              <img src="./images/about.jpg" className="img-fluid" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
