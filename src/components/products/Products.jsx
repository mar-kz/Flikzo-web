import "./product.css";
import { Link } from "react-router-dom";
import { watch } from "../constants/constants";
import { GoHeart } from "react-icons/go";
import { AiOutlineShareAlt } from "react-icons/ai";
import ReactStars from "react-stars";
const Products = () => {
  return (
    <div className="col-3 ">
      <div className="product__card  position-relative  ">
        <div className="product__card__image">
          <img src={watch} alt="product" className="img-fluid" />
        </div>
        <div className="product__add-cart secondary-button text-center ">
          <Link> Add to Cart </Link>
        </div>
        <div className="product__description mt-3 mb-0">
          <p>Yellow Reserved Hoodie</p>
        </div>
        <div className="product__price-details d-flex gap-15 align-items-center mb-0 ">
          <div className="product__initial-price ">
            <p className="mb-0">Rs.94</p>
          </div>
          <div className="product__final-price ">
            <p className="mb-0">Rs.94</p>
          </div>
        </div>
        <div className="product__actions position-absolute d-flex flex-column">
          <div className="product__whislist">
            {" "}
            <Link>
              {" "}
              <GoHeart className="fs-4" />{" "}
            </Link>
          </div>
          <div className="product__sharebutton">
            <Link>
              <AiOutlineShareAlt className="fs-4 mt-2 " />
            </Link>
          </div>
        </div>
        <div className="product__rating-stars">
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            color1="#dddddd"
            color2="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};
export default Products;
