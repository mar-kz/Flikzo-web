import React from "react";
import "./Home.css";
import {
  mainBanner1,
  catBanner1,
  catBanner02,
  catBanner03,
  catBanner04,
  freeShipping,
  customerSupport,
  Offer,
  securePayments,
  camera,
  brand01,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand07,
  brand08,
} from "../constants/constant";

import Products from "../../components/products/Products";
import SpecialProducts from "../../components/specialProducts/SpecialProducts";
import BrandedProduct from "../../components/brandedProduct/BrandedProduct";
import famous1 from "../../assets/images/famous1.webp";
import famous2 from "../../assets/images/famous2.webp";
import famous3 from "../../assets/images/famous3.webp";
import famous4 from "../../assets/images/famous4.webp";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BrandedProduct2 from "../../components/brandedProduct/BrandedProductLight";
const Home = () => {
  return (
    <>
      {/* Home Setion 1 */}
      <section className="home-wrapper-1 py-5 mb-5  ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main__banner-content position-relative">
                <img
                  src={mainBanner1}
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main__banner-content-text position-absolute ">
                  <h4>BELIEVE WHAT YOU SEE</h4>
                  <h5>
                    Outside The City <br /> Mini{" "}
                    <span className="text-highlight"> bag Arrivals </span>{" "}
                  </h5>
                  <p className="mt-3">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Fuga quos asperiores, ducimus <br /> culpa
                    optio quaerat repellat dolor
                  </p>
                  <Link className="primary-button mt-3 ">BUY NOW!</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrapper justify-content-between align-items-center gap-10  ">
                <div className="small__banner-content position-relative">
                  <img
                    src={catBanner1}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small__banner-content-text position-absolute ">
                    <h4>BELIEVE WHAT YOU SEE</h4>
                    <h5>
                      Outside The City <br /> Mini{" "}
                      <span className="text-highlight"> bag Arrivals </span>{" "}
                    </h5>
                    <p className="mt-1">Lorem, ipsum dolor.</p>
                  </div>
                </div>
                <div className="small__banner-content position-relative ">
                  <img
                    src={catBanner04}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small__banner-content-text position-absolute ">
                    <h4>BELIEVE WHAT YOU SEE</h4>
                    <h5>
                      Outside The City <br /> Mini{" "}
                      <span className="text-highlight"> bag Arrivals </span>{" "}
                    </h5>
                    <p className="mt-1">Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrapper justify-content-between align-items-center gap-10 mt-2 ">
                <div className="small__banner-content position-relative">
                  <img
                    src={catBanner03}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small__banner-content-text position-absolute ">
                    <h4>BELIEVE WHAT YOU SEE</h4>
                    <h5>
                      Outside The City <br /> Mini{" "}
                      <span className="text-highlight"> bag Arrivals </span>{" "}
                    </h5>
                    <p className="mt-1">Lorem, ipsum dolor.</p>
                  </div>
                </div>
                <div className="small__banner-content position-relative ">
                  <img
                    src={catBanner02}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small__banner-content-text position-absolute ">
                    <h4>BELIEVE WHAT YOU SEE</h4>
                    <h5>
                      Outside The City <br /> Mini{" "}
                      <span className="text-highlight"> bag Arrivals </span>{" "}
                    </h5>
                    <p className="mt-1">Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section 2 */}
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="flikzo__categories d-flex align-items-center gap-20 rounded justify-content-evenly  ">
                <div className="d-flex align-items-center justify-content-center flex-column m-3  gap-30 text-center">
                  <img src={camera} alt="category-img" />
                  <div className="flikzo__category-details">
                    <h6>Category Name</h6>
                    <p> Total Items</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column m-3 gap-30 text-center">
                  <img src={camera} alt="category-img" />
                  <div className="flikzo__category-details">
                    <h6>Category Name</h6>
                    <p> Total Items</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column m-3 gap-30 text-center">
                  <img src={camera} alt="category-img" />
                  <div className="flikzo__category-details">
                    <h6>Category Name</h6>
                    <p> Total Items</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column m-3 gap-30 text-center">
                  <img src={camera} alt="category-img" />
                  <div className="flikzo__category-details">
                    <h6>Category Name</h6>
                    <p> Total Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section 3 */}
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="flikzo__services d-flex align-items-center justify-content-between  ">
                <div className=" d-flex flex-column align-items-center ">
                  <img src={freeShipping} alt="freeshipping" />
                  <div className="mt-1">
                    <h6 className="text-center mt-2 ">Free Shipping</h6>
                    <p className="text-center">
                      Over the last few weeks, and as reported previously in our
                      first article
                    </p>
                  </div>
                </div>{" "}
                <div className=" d-flex flex-column align-items-center ">
                  <img src={customerSupport} alt="freeshipping" />
                  <div className="mt-1">
                    <h6 className="text-center mt-2 ">Free Shipping</h6>
                    <p className="text-center">
                      Over the last few weeks, and as reported previously in our
                      first article
                    </p>
                  </div>
                </div>{" "}
                <div className=" d-flex flex-column align-items-center ">
                  <img src={Offer} alt="freeshipping" />
                  <div className="mt-1">
                    <h6 className="text-center mt-2 ">Free Shipping</h6>
                    <p className="text-center">
                      Over the last few weeks, and as reported previously in our
                      first article
                    </p>
                  </div>
                </div>{" "}
                <div className=" d-flex flex-column align-items-center ">
                  <img src={securePayments} alt="freeshipping" />
                  <div>
                    <h6 className="text-center mt-2 ">Free Shipping</h6>
                    <p className="text-center">
                      Over the last few weeks, and as reported previously in our
                      first article
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product card */}
      <section className="product__card-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="section__heading mb-3 ">
              <h2>Top Month Sellers</h2>
            </div>
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </section>
      {/* Branded Products */}
      <section className="branded__products-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <BrandedProduct
              image={famous1}
              title="Smart Watch 7"
              title2="Big Screen Smart Watch Series 7"
              offer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, explicabo."
            />
            <BrandedProduct2
              image={famous2}
              title="Studio Display"
              title2="600 Nits of Brightness"
              offer="27inch 5k Ratina Display"
            />
            <BrandedProduct2
              image={famous3}
              title="Studio Display"
              title2="600 Nits of Brightness"
              offer="27inch 5k Ratina Display"
            />
            <BrandedProduct2
              image={famous4}
              title="Studio Display"
              title2="600 Nits of Brightness"
              offer="27inch 5k Ratina Display"
            />
          </div>
        </div>
      </section>
      {/* Brand Marquee  */}
      <section className="marquee-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee__inner-wrapper card-wrapper">
                <Marquee className="d-flex ">
                  <div className="w-25 mx-4">
                    <img src={brand01} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand02} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand03} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand04} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand05} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand06} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand07} alt="" />
                  </div>{" "}
                  <div className="w-25 mx-4">
                    <img src={brand08} alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section - Special Products */}
      <section className="special__product-sections py-5 mb-0 ">
        <div className="container-xxl">
          <div className="row mb-3 ">
            <div className="col-12">
              <div className="section__heading mb-0">
                <h2 className="">Summer Collections</h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 d-flex gap-10 ">
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
            </div>
          </div>
        </div>
      </section>
      {/* Popular Products */}
      <section className="popular__product-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="section__heading mb-3 ">
              <h2>Our Popular Products</h2>
            </div>
            <div className="row">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
