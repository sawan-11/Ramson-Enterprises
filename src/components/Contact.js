import React from "react";

const Contact = (props) => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1
                    className="main-heading"
                    style={{
                      color: props.mode === "dark" ? "#f3f1f1" : "black",
                    }}
                  >
                    Contact with our <br /> side team
                  </h1>
                  <p
                    className="main-para"
                    style={{
                      color: props.mode === "dark" ? "#f3f1f1" : "black",
                    }}
                  >
                    The href attribute requires a valid value to be accessible.
                  </p>
                  <figure>
                    <img
                      src="./images/contact.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </div>

                {/* right sidde contact  */}
                <div className="contact-rightside col-12 col-lg-7">
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
                          If you cannot provide a valid href, but still need the
                          element to resemble a link,
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-style2 my-3 w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
