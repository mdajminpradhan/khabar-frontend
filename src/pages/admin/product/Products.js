import React from "react";
import "assets/sass/admin/pages/products.scss";
import AdminBase from "components/admin/AdminBase";
import { Link } from "react-router-dom";
import ProductTable from "components/admin/ProductTable";

const Products = () => {
  return (
    <AdminBase>
      <div className="adminproducts">
        <div className="container">
          <div className="adminproducts__header">
            <span>All products</span>
            <Link to="/admin/product/new" className="primary">
              Add New
            </Link>
          </div>
          <div className="adminproducts__body">
            <ProductTable />
          </div>
        </div>
      </div>
    </AdminBase>
  );
};

export default Products;
