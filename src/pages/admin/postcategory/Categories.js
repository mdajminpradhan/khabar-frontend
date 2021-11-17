import React, { useEffect } from "react";
import "assets/sass/admin/pages/categories.scss";
import AdminBase from "components/admin/AdminBase";
import { Link } from "react-router-dom";
import { HiPencil } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import cogoToast from "cogo-toast";
import { useGetPostCategories, useDeletePostCategory } from "apicalls/hooks/admin/usePostCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {
  const { data, isLoading } = useGetPostCategories();
  const { mutateAsync } = useDeletePostCategory();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // triger the function when user submit
  const handleDeleteCategory = async (cateId) => {
    try {
      await mutateAsync(cateId);
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

  // categories count start from zero
  // and later on incresed through loop
  let count = 1;

  return (
    <AdminBase>
      <div className="admincategories">
        <div className="container">
          <div className="categories__header">
            <span>All categories</span>
            <Link to="/admin/postcategory/new" className="primary">
              Add New
            </Link>
          </div>
          <div className="categories__body">
            <div className="categories__bodyHeader">
              <div>No.</div>
              <div>Icon</div>
              <div>Category</div>
              <div>Action</div>
            </div>
            <div className="categories__bodyBottom">
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                data?.map((cate, index) => (
                  <div key={index} className="categories__bodyBottomCategory">
                    <div>{count++}</div>
                    <div className="cateimage">
                      <img src={cate.icon} />
                    </div>
                    <div>{cate.title}</div>
                    <div className="actions">
                      <Link to={`/admin/postcategory/update/${cate._id}`}>
                        <HiPencil />
                      </Link>
                      <AiOutlineDelete
                        onClick={() => handleDeleteCategory(cate?._id)}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminBase>
  );
};

export default Categories;
