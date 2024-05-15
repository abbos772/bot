import React from "react";
import "./Home.css";
import iphone from "../../img/iphone12.png";
import ch from "../../img/ch.png";
import ph from "../../img/ph.png";
import {
  useGetProductsQuery,
  useGetDetailProductQuery,
} from "../context/productsApi";
import Products from "../products/Products";
import Footer from "../footer/Footer";
function Home() {
  let { data, isLoading } = useGetProductsQuery();

  console.log(data);
  return (
    <div>
      <div className="continer">
        <div className="iphone_12">
          <div className="iph_text">
            <b>Mobile</b>
            <h1>
              Tempered Glass <br /> Backcover
            </h1>
            <button className="all">Shop all!</button>
          </div>
          <div className="iph_img">
            <img src={iphone} alt="" />
          </div>
        </div>
        {isLoading ? <h2>Loading...</h2> : <></>}
        <Products data={data?.products} />
        <div className="red">
          <div className="redcart"></div>
          <p>about us</p>
          <h1>
            If you’re looking for a Premium Quality <br /> Tempered Glass or
            Back-cover for <br /> your Device{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <br /> exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <img className="red_img" src={ch} alt="" />
        </div>
        <div className="boxes">
          <div className="box">
            <div className="text">
              <h1>
                Shop Premium <br />
                Tempered Glass in wholesale Price !
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud <br />{" "}
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure <br />
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.  LKR : 299
              </p>
              <button className="shop">Shop Tempered Glass </button>
            </div>
            <div className="img">
              <img src={ph} alt="" />
            </div>
          </div>
          <div className="box1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
