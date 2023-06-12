import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import {
  BsTelephoneOutboundFill,
  MdOutlineCompare,
  BsSearch,
  FaBars,
  AiOutlineHeart,
  HiOutlineUser,
  FaOpencart,
  BsCart3,
  FiGrid,
} from "../constants/constants";

import { flikzo } from "../constants/constants";

const Header = () => {
  return (
    <>
      {/* Top Strip */}
      <header className="header__top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-start text-white mb-0">
                Free Delivery above ₹200
              </p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0 text-white ">
                <BsTelephoneOutboundFill />{" "}
                <a className="text-white" href="tel:+91 9973594858">
                  {" "}
                  +91 9973594858{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Middle Strip*/}

      <header className="header__uppper_strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center  ">
            <div className="col-2">
              {" "}
              <Link className="logo d-flex align-items-center mb-0 gap-15 ">
                <FaOpencart className="fs-1 logo__pic" />
                <img src={flikzo} alt="logo" />
              </Link>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2 "
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className=" fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header__upper-links d-flex align-items-center justify-content-between fs-5">
                <div className="flikzo__compareproduct">
                  <Link className="d-flex  align-items-center gap-10">
                    <MdOutlineCompare className="fs-3 flikzo__whishlist  " />
                    <p className="mb-0">
                      Compare <br /> Products{" "}
                    </p>
                  </Link>
                </div>
                <div className="flikzo__whishlist">
                  <Link className="d-flex  align-items-center gap-10">
                    <AiOutlineHeart className="fs-3 flikzo__whishlist  " />
                    <p className="mb-0">Whishlist</p>
                  </Link>
                </div>
                <div className="flikzo__user">
                  <Link className="d-flex justify-content-center align-items-center gap-10 ">
                    <HiOutlineUser className="fs-3 flikzo__user" />
                    <p className="mb-0">Sign In</p>
                  </Link>
                </div>
                <div className="flikzo__cart">
                  <Link className="d-flex justify-content-center align-items-center gap-10 ">
                    <BsCart3 className="fs-2 flikzo__cart" />
                    <div className="d-flex flex-column ">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">Rs.500</p>
                    </div>
                  </Link>
                </div>{" "}
                <div className="flikzo__cart">
                  <Link className="d-flex justify-content-center align-items-center gap-10 ">
                    <FaBars className="fs-4 flikzo__menu" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Lower Strip */}
      <header className="header__lower_strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30 ">
                <div className="menu-dropdown">
                  <button
                    className="btn  dropdown-toggle bg-transparent border-0 d-flex justify-content-center align-items-center gap-15 "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FiGrid className="fs-5" />
                    <span className="me-2 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/groceries">Groceries</NavLink>
                    <NavLink to="/vegetables">vegetables</NavLink>
                    <NavLink to="/Non-veg">Non-Veg</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
