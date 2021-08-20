import React, { useState } from "react";
import WorkApi from "../API/WorkApi";

const HowItWorks = (props) => {
  const [workData, setWorkData] = useState(WorkApi);

  return (
    <>
      <section>
        <div className="work-container container ">
          <h1
            className="main-heading text-center "
            style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
          >
            How does it works
          </h1>
          <div className="row">
            {workData.map((curElem) => {
              const { logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv "
                    style={{
                      color: props.mode === "dark" ? "#f3f1f1" : "black",
                    }}
                  >
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2
                      className="sub-heading"
                      style={{
                        color: props.mode === "dark" ? "#f3f1f1" : "black",
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      className="main-para w-100"
                      style={{
                        color: props.mode === "dark" ? "#f3f1f1" : "black",
                      }}
                    >
                      {info}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
