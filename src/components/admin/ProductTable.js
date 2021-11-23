import React from "react";
import "assets/sass/admin/components/table.scss";

// importing libraries

import { HiPencil } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Image } from "cloudinary-react";

// importing api hook
import {
  useGetProducts,
  useDeleteProduct,
} from "apicalls/hooks/admin/useProduct";

const ProductTable = () => {
  const { data, isLoading } = useGetProducts();
  const { mutateAsync } = useDeleteProduct();

  // triger the function when user submit
  const handleDeleteProduct = async (cateId) => {
    try {
      await mutateAsync(cateId);
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

  // products count start from zero
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
        {isLoading ? (
          <Skeleton count={10} />
        ) : (
          data?.map((product, index) => (
            <div className="tablerow">
              <div>{count++}</div>
              <div>
                <Image publicId={product?.pictureid} width="300" crop="scale" />
              </div>
              <div className="title">{product?.title || "Product title"}</div>
              <div>Category</div>
              <div className="comment">3</div>
              <div className="actions">
                <Link to={`/admin/product/update/${product?._id}`}>
                  <HiPencil />
                </Link>
                <AiOutlineDelete
                  onClick={() => {
                    handleDeleteProduct(product?._id);
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductTable;
