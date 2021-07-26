import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require("./camion.jpg")}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              PHILIPPE VENET
              <br/>
              PHONE: 00000000
              <br/>
              EMAIL: philippe.cda@afpa.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
