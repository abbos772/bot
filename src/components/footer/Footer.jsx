import React from "react";
import "./Footer.css";
import m from "../../img/m.png";
function Footer() {
  return (
    <div className="footer">
      <div className="continer">
        <div className="fot">
          <div className="foot">
            <img src={m} alt="" />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,{" "}
              <br /> sed do eiusmod tempor <br /> incididunt ut labore et <br />{" "}
              dolore magna aliqua.
            </p>
          </div>
          <div className="foot">
            <p>
              Contact us <br /> E: info@example.com <br />
              P: +94 7670000000A: <br /> A : 123 Hospital rd, <br /> Kalubowila,
              Dehiwela
            </p>
          </div>
          <div className="foot">
            <p>
              Useful links <br />
              Shop All <br />
              Tempered Glass <br />
              Back-cover <br />
              About Us
            </p>
          </div>
          <div className="foot">
            <p>
              Contact us <br /> E: info@example.com <br />
              P: +94 7670000000A: <br /> A : 123 Hospital rd, <br /> Kalubowila,
              Dehiwela
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
