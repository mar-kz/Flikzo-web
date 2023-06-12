import "./SpecialProducts.css";
import { watch } from "../constants/constants";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { FaOpencart } from "../constants/constants";

const SpecialProducts = () => {
  return (
    <div className="col-4">
      <div className="special__product-card">
        <div className="d-flex justify-content-between ">
          <div className="special__product__card-image">
            <img src={watch} alt="" className="img-fluid" />
          </div>
          <div className="special__product-details mt-2 ">
            <h5 className="product__brand text-heading  ">Havels</h5>
            <h6 className="Product__title">
              {" "}
              VAIO Fit Laptop - Windows 8 SVF14322CXW{" "}
            </h6>
            <div className="Product__rating">
              <ReactStars
                className="mb-3"
                count={5}
                size={24}
                value={4}
                edit={false}
                color1="#dddddd"
                color2="#ffd700"
              />
              <div className="product__price-details d-flex gap-15 align-items-center mb-2 ">
                <div className="product__final-price ">
                  <p className="mb-0">Rs.94</p>
                </div>
                <div className="product__initial-price ">
                  <p className="mb-0">Rs.94</p>
                </div>
              </div>
              <div className="product__sale-details d-flex align-items-center gap-15 mb-3  ">
                <div className="discount-till mb-0 ">
                  <p className="mb-0">5 days</p>
                </div>
                <div className="gap-10 d-flex">
                  <span class="badge bg-danger text-white badge-circle   ">
                    1
                  </span>
                  :
                  <span class="badge bg-danger text-white badge-circle ">
                    1
                  </span>
                  :
                  <span class="badge bg-danger text-white badge-circle">1</span>
                </div>
              </div>
              <div className="product__add-cart secondary-button text-center mb-0  ">
                <Link> Add to Cart </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialProducts;
