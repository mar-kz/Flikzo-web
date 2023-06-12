import "./BrandedProduct.css";

const BrandedProduct2 = ({ image, title, title2, offer }) => {
  return (
    <>
      <div className="col-3">
        <div className="branded__product position-relative">
          <div className="branded__Product-image  ">
            <img src={image} alt={title} className="rounded img-fluid" />
          </div>
          <div className="branded__product-title position-absolute ">
            <h4 className="text-heading">{title}</h4>
            <p className="product__heading2 mb-0">{title2}</p>
            <p className="product__offer2">{offer}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrandedProduct2;
