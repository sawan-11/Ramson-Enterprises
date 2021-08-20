import React, { useState } from "react";
import ServicesApi from "../API/ServicesApi";

const Services = (props) => {
  const [serviceData, setServiceData] = useState(ServicesApi);
  return (
    <>
      <section>
        <div className="container main-service-container" id="service">
          <h1
            className="text-center main-heading"
            style={{ color: props.mode === "dark" ? "#f3f1f1" : "black" }}
          >
            Services we offers
          </h1>
          <div className="row d-flex">
            {serviceData.map((Elem) => {
              const { img, title, info } = Elem;
              return (
                <>
                  <div className="col-12 col-lg-3 text-center work-container-subdiv">
                    <div
                      class="card"
                      id="cards"
                      style={{
                        backgroundColor:
                          props.mode === "light" ? "white" : "black",
                      }}
                    >
                      <h2
                        class="card-title sub-heading"
                        style={{
                          color: props.mode === "dark" ? "#f3f1f1" : "black",
                        }}
                      >
                        {title}
                      </h2>
                      <img src={img} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p
                          class="card-text service-para"
                          style={{
                            color: props.mode === "dark" ? "#f3f1f1" : "black",
                          }}
                        >
                          price: $12
                        </p>
                        <p
                          class="card-text service-para"
                          style={{
                            color: props.mode === "dark" ? "#f3f1f1" : "black",
                          }}
                        >
                          {info}
                        </p>
                        <a href="/" class="btn btn-style2">
                          book
                        </a>
                      </div>
                    </div>
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

export default Services;
