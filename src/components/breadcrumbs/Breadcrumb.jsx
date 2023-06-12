import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((pathname) => pathname !== "");

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((pathname, index) => {
          const formattedPathname =
            pathname.charAt(0).toUpperCase() + pathname.slice(1);
          const isLastItem = index === pathnames.length - 1;

          return (
            <li key={index} className="breadcrumb-item">
              {isLastItem ? (
                <span>{formattedPathname}</span>
              ) : (
                <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                  {formattedPathname}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
