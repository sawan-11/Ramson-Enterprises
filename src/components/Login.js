import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handlelogin,
    handlesignup,
    account,
    setAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <section className="container main-about-container" id="signup">
        <form method="POST">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <input
                type="email"
                outofcus
                required
                className="form-control contact-input-filled"
                name=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your email"
              />
              <p className="errormsg">{emailError}</p>
            </div>
            <div className="col-12 col-lg-6 ">
              <input
                type="password"
                className="form-control contact-input-filled"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="enter Your password"
              />
              <p className="errormsg">{passwordError}</p>
            </div>
          </div>
          {account ? (
            <>
              <button
                className="btn btn-style2 my-3 w-100"
                onClick={handlelogin}
              >
                sign In
              </button>
              <p>
                Dont have an account ?{" "}
                <span onClick={() => setAccount(!account)}>sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button
                className="btn btn-style2 my-3 w-100"
                onClick={handlesignup}
              >
                sign Up
              </button>
              <p>
                have an account ?{" "}
                <span onClick={() => setAccount(!account)}>sign in</span>
              </p>
            </>
          )}
        </form>
      </section>
    </>
  );
};

export default Login;
