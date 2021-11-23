import React from "react";
import "assets/sass/admin/pages/products.scss";
import AdminBase from "components/admin/AdminBase";
import { Link } from "react-router-dom";
import PostTable from "components/admin/PostTable";

const Posts = () => {
  return (
    <AdminBase>
      <div className="adminproducts">
        <div className="container">
          <div className="adminproducts__header">
            <span>All posts</span>
            <Link to="/admin/post/new" className="primary">
              Add New
            </Link>
          </div>
          <div className="adminproducts__body">
            <PostTable />
          </div>
        </div>
      </div>
    </AdminBase>
  );
};

export default Posts;
