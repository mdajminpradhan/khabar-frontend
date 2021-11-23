import React, { useEffect, useState } from "react";
import "assets/sass/admin/pages/newproduct.scss";
import "assets/sass/admin/components/productform.scss";

// importing libraries
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { serialize } from "object-to-formdata";

// importing components
import AdminBase from "components/admin/AdminBase";

// api hook
import { useGetProductCategories } from "apicalls/hooks/admin/useProductCategory";
import cogoToast from "cogo-toast";
import { useCreateProduct } from "apicalls/hooks/admin/useProduct";

// creating schema for form validation
let schema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title should be at least 3 characters")
    .max(100, "Title can not be more than 100 characters")
    .required(),
  shortdescription: yup
    .string()
    .min(10, "Short description should be at least 10 characters")
    .max(300, "Short description can not be more than 300 characters")
    .required(),
  longdescription: yup
    .string()
    .min(10, "Long description should be at least 10 characters")
    .max(1500, "Long description can not be more than 1500 characters")
    .required(),
  category: yup
    .array()
    .min(1, "Please select at least 1 category")
    .required()
    .typeError("You must select at least one category"),
  isFeatured: yup.bool().nullable(),
  price: yup
    .number()
    .positive()
    .integer()
    .required()
    .typeError("You must specify a number"),
  specialprice: yup
    .number()
    .positive()
    .integer()
    .nullable()
    .typeError("You must specify a number"),
});

const NewProduct = ({ history }) => {
  const [image, setImage] = useState();
  const { data, isLoading } = useGetProductCategories();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    mutateAsync,
    isSuccess,
    isLoading: productLoading,
  } = useCreateProduct();

  const watchAll = watch();

  const handleImage = (event) => {
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
      setImage(image);
    }
  };

  // creating product on submit
  const handleCreateProduct = async (formdata) => {
    if (!image) {
      cogoToast.error("Please select product thumbnail", {
        position: "top-right",
      });
    } else {
      const formData = serialize(formdata);
      formData.append("picture", image);

      try {
        await mutateAsync(formData);
      } catch (error) {
        cogoToast.error(error?.response?.data?.error, {
          position: "top-right",
        });
      }
    }
  };

  if (isSuccess) {
    history.push("/admin/products");
  }

  useEffect(() => {
    // console.log("errors", errors);
    // console.log("watch", watchAll);
  }, [errors, watchAll]);

  return (
    <AdminBase>
      <div className="newpost">
        <div className="container">
          <div className="form">
            <form onSubmit={handleSubmit(handleCreateProduct)}>
              <div className="form__left">
                <label htmlFor="title">Product title</label>
                <input type="text" id="title" {...register("title")} />
                <small class="errormsg">
                  {errors?.title ? errors.title?.message : null}
                </small>

                <label className="shortdesc">Product short description</label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  {...register("shortdescription")}
                ></textarea>
                <small class="errormsg">
                  {errors?.shortdescription
                    ? errors.shortdescription?.message
                    : null}
                </small>

                <label className="longdesc">Product long description</label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  {...register("longdescription")}
                ></textarea>
                <small class="errormsg">
                  {errors?.longdescription
                    ? errors.longdescription?.message
                    : null}
                </small>
              </div>
              <div className="form__right">
                <div className="publish">
                  <div>
                    <span className="publishContext">
                      Publish your data right away
                    </span>
                  </div>
                  <div className="devider" />

                  <div className="publishh">
                    {productLoading ? (
                      <input
                        type="button"
                        className="primary"
                        value="Publishing..."
                      />
                    ) : (
                      <input
                        type="submit"
                        className="primary"
                        value="Publish"
                      />
                    )}
                  </div>
                </div>
                <div className="categories">
                  <h5>Categories</h5>

                  {isLoading ? (
                    <Skeleton count={5} />
                  ) : (
                    data?.map((cate, index) => (
                      <div className="category">
                        <input
                          type="checkbox"
                          id={cate?.title || ""}
                          value={cate?._id}
                          {...register("category")}
                        />
                        <label htmlFor={cate?.title || ""}>
                          {cate?.title || "Cate title"}
                        </label>
                      </div>
                    ))
                  )}

                  <small class="errormsg">
                    {errors?.categroy ? errors.categroy?.message : null}
                  </small>
                </div>

                <div className="topproduct">
                  <h5>Top product</h5>

                  <div className="category">
                    <input
                      type="checkbox"
                      id="featured"
                      //   checked={top == true ? "true" : ""}
                      {...register("isFeatured")}
                    />
                    <label htmlFor="featured">Featured</label>
                  </div>
                </div>
                <div className="price">
                  <h5>Top product</h5>

                  <div className="pricesec">
                    <label htmlFor="price">Regular price</label>
                    <input type="number" id="price" {...register("price")} />
                    <small class="errormsg">
                      {errors?.regularprice
                        ? errors.regularprice?.message
                        : null}
                    </small>
                  </div>

                  <div className="pricesec">
                    <label htmlFor="specialprice">Special price</label>
                    <input
                      type="number"
                      id="specialprice"
                      {...register("specialprice")}
                    />
                    <small class="errormsg">
                      {errors?.specialprice
                        ? errors.specialprice?.message
                        : null}
                    </small>
                  </div>
                </div>
                <div className="thumbnail">
                  <h5>Thumbnail</h5>

                  <input type="file" onChange={handleImage} />
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="thumbnail" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminBase>
  );
};

export default NewProduct;
