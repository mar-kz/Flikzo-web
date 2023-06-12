import Breadcrumb from "../../components/breadcrumbs/Breadcrumb";

const Vegetables = () => {
  return (
    <div className="vegetables__page">
      {/* BreadCrumb Part */}
      <div className="breadcrumb__section">
        <div className="container-xxl">
          <div className="col-12">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vegetables;
