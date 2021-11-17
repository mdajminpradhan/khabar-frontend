/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import "assets/sass/admin/pages/createAndUpdatecategory.scss";
import AdminBase from "components/admin/AdminBase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  useUpdateProductCategory,
  useGetProductCategoryById,
} from "apicalls/hooks/admin/useProductCategory";
import cogoToast from "cogo-toast";
import { useParams } from "react-router-dom";

let schema = yup.object().shape({
  title: yup.string().required(),
});

const NewCategory = ({ history }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [icon, setIcon] = useState("");
  const { category_id } = useParams();

  // api calls
  const { data: cateData } = useGetProductCategoryById(category_id);
  const { mutateAsync, isSuccess, data, isLoading } = useUpdateProductCategory();

  useEffect(() => {
    if (cateData) {
      reset(cateData);
    }
  }, [cateData]);

  const handleIcon = (event) => {
    console.log(event.target.files);
    const image = event.target.files[0];
    if (
      image.type !== "image/png" &&
      image.type !== "image/jpg" &&
      image.type !== "image/jpeg"
    ) {
      cogoToast.error("This type of file cannot be uploaded", {
        position: "top-right",
      });
    } else if (image.size > 1000000) {
      cogoToast.error("File size can't be more 1 MB", {
        position: "top-right",
      });
    } else {
      setIcon(image);
    }
  };

  // triger the function when user submit
  const handleUpdateCategory = async (formdata) => {
    const formData = new FormData();
    formData.append("title", formdata.title);
    icon ? formData.append("icon", icon) : null

    const cateData = {
      categoryId: category_id,
      formdata: formData,
    };

    try {
      await mutateAsync(cateData);
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

    if (isSuccess) {
      history.push("/admin/productcategories");
    }

  const watchAll = watch();

  useEffect(() => {
    // console.log(errors, watchAll);
  }, [errors, watchAll]);

  return (
    <AdminBase>
      <div className="newcategory">
        <div className="container">
          <form onSubmit={handleSubmit(handleUpdateCategory)}>
            <label htmlFor="cate">Category title</label>
            <input type="text" id="cate" {...register("title")} />

            <label htmlFor="icon">Category Icon</label>
            <input type="file" id="icon" onChange={handleIcon} />
            {icon ? (
              <img src={URL.createObjectURL(icon)} className="icon" alt="" />
            ) : cateData?.icon ? (
              <img src={cateData?.icon} className="icon" alt="" />
            ) : (
              ""
            )}

            {isLoading ? (
              <input
                type="button"
                className="primary"
                value="Creating category..."
              />
            ) : (
              <input
                type="submit"
                className="primary"
                value="Update Category"
              />
            )}
          </form>
        </div>
      </div>
    </AdminBase>
  );
};

export default NewCategory;
