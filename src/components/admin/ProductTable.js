import React, { useEffect, useState } from "react";
import "assets/sass/admin/components/table.scss";
import Image from "assets/images/blog/recentpost/1.jpg";
import { HiPencil } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import {
  useGetProducts,
  useDeleteProduct,
} from "apicalls/hooks/admin/useProduct";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductTable = () => {
  const { data, isLoading } = useGetProducts();
  const { mutateAsync } = useDeleteProduct();

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
    <div className="table">
      <div className="table__header">
        <div>No.</div>
        <div>Thumbnail</div>
        <div>Title</div>
        <div>Category</div>
        <div>Comments</div>
        <div>Action</div>
      </div>
      <div className="table__body">
        {data?.map((product, index) => (
          <div className="tablerow">
            <div>{count++}</div>
            <div>
              <img src={product?.picture} alt="thumbnail" />
            </div>
            <div className="title">{product?.title || "Product title"}</div>
            <div>Category</div>
            <div className="comment">3</div>
            <div className="actions">
              <Link to="a">
                <HiPencil />
              </Link>
              <AiOutlineDelete
                onClick={() => {
                  handleDeleteCategory(product?._id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
