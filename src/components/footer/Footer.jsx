import React from "react";
import "./Footer.css";
import "../../App.css";
import {
  flikzo_reverse,
  facebook,
  youtube,
  instagram,
} from "../constants/constants";
import { FaOpencart } from "../constants/constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="flikzo__footer">
        {/* News Letter Subscribe */}
        <div className="container-xxl">
          <div className="flikzo__news-letter  d-flex flex-column py-3 ">
            <div className="row">
              <div className="col-12">
                <p className="text-center text-white ">
                  Clearance Sales <br /> Up to 70% Off. All Sales are Final!
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="input-group  ">
                  <input
                    type="text"
                    className="form-control py-2 "
                    placeholder="Subcribe Your Email"
                    aria-label="Subcribe Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon3">
                    Subscribe
                  </span>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>

          {/* Logo-ImportantLinks-policies */}

          <div className="flikzo__footer-links py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-4">
                  <div className="footer__logo-details">
                    <Link
                      className="logo d-flex align-items-center mb-0 gap-15 "
                      to=""
                    >
                      <FaOpencart className="fs-1 logo__pic" />
                      <img src={flikzo_reverse} alt="logo" />
                    </Link>
                    <p className="text-white mt-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus at officia molestias magni sapiente a.
                    </p>
                    <div className="footer__socialmedia d-flex align-items-center mb-0">
                      <Link to="/">
                        {" "}
                        <img src={facebook} alt="flikzo_facebook" />{" "}
                      </Link>
                      <Link to="/">
                        {" "}
                        <img src={youtube} alt="flikzo_facebook" />{" "}
                      </Link>
                      <Link to="/">
                        {" "}
                        <img src={instagram} alt="flikzo_facebook" />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="flikzo__support">
                    <p className="footer__link-section-title py-2 ">Support</p>

                    <div className="flikzo__support-links d-flex flex-column">
                      <Link>
                        <p>About Us</p>
                      </Link>
                      <Link>
                        <p>Terms of Services</p>
                      </Link>
                      <Link>
                        <p>Privacy Policy</p>
                      </Link>
                      <Link>
                        <p>Promotion</p>
                      </Link>
                      <Link>
                        <p>Return</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="flikzo__support">
                    <p className="footer__link-section-title py-2 ">Shop</p>

                    <div className="flikzo__support-links d-flex flex-column">
                      <Link>
                        <p>Groceries</p>
                      </Link>
                      <Link>
                        <p>Vegetables</p>
                      </Link>
                      <Link>
                        <p>Non-Veg</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="flikzo__shop">
                    <p className="footer__link-section-title py-2 ">Company</p>

                    <div className="flikzo__support-links d-flex flex-column">
                      <Link>
                        <p>Careers</p>
                      </Link>
                      <Link>
                        <p>Trems & Conditions</p>
                      </Link>
                      <Link>
                        <p>Privacy & Cookie Policy</p>
                      </Link>
                      <Link>
                        <p>Return</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="flikzo__company">
                    <p className="footer__link-section-title py-2 ">
                      Contact Us
                    </p>

                    <div className="flikzo__support-links d-flex flex-column">
                      <Link>
                        <p>About Us</p>
                      </Link>
                      <Link>
                        <p>Terms of Services</p>
                      </Link>
                      <Link>
                        <p>Privacy Policy</p>
                      </Link>
                      <Link>
                        <p>Promotion</p>
                      </Link>
                      <Link>
                        <p>Return</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flikzo__copyright container py-3 ">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-6">
                {" "}
                &copy; {new Date().getFullYear()} Flikzo - All rights reserved{" "}
              </div>
              <div className="col-6 text-end">Powered by Orca Tech 360</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
