import React from "react";

const SignUp = (props) => {
  return (
    <>
      <section className="container main-about-container" id="signup">
        <form method="POST">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="fname"
                placeholder="First Name"
              />
            </div>
            <div className="col-12 col-lg-6 ">
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="lname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="p-num"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-12 col-lg-6 ">
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="email"
                placeholder="Email Id"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="add"
                placeholder="Add you Address"
              />
              <input
                type="text"
                className="form-control contact-input-filled"
                name=""
                id="msg"
                placeholder="Add Your Message"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                class="main-para"
                style={{
                  color: props.mode === "dark" ? "#f3f1f1" : "black",
                }}
              >
                If you cannot provide a valid href, but still need the element
                to resemble a link,
              </label>
            </div>
          </div>
          <button className="btn btn-style2 my-3 w-100">Submit</button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
