import React, { useEffect, useState } from "react";
import "assets/sass/admin/pages/newproduct.scss";
import "assets/sass/admin/components/postform.scss";

// importing components
import AdminBase from "components/admin/AdminBase";

// api hook
import { useGetPostCategories } from "apicalls/hooks/admin/usePostCategory";
import cogoToast from "cogo-toast";
import { useCreatePost } from "apicalls/hooks/admin/usePost";

// importing libraries
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { serialize } from "object-to-formdata";
import { IoIosClose } from "react-icons/io";
import Cookies from "universal-cookie";
const cookie = new Cookies();

// creating schema for form validation
let schema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title should be at least 3 characters")
    .max(100, "Title can not be more than 100 characters")
    .required(),
  description: yup
    .string()
    .min(10, "Long description should be at least 10 characters")
    .max(1500, "Long description can not be more than 1500 characters")
    .required(),
  category: yup
    .array()
    .min(1, "Please select at least 1 category")
    .required()
    .typeError("You must select at least one category"),
});

const NewProduct = ({ history }) => {
  const [image, setImage] = useState();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const { data, isLoading } = useGetPostCategories();

  const user = cookie.get('loginaccount');


  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isSuccess, isLoading: postLoading } = useCreatePost();

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

  // creating tag
  const handleTag = (event) => {
    if (event.key === "Enter") {
      if (tag === "") {
        cogoToast.error("Write a tag first please", {
          position: "top-right",
        });
      } else {
        setTags([...tags, tag]);
        setTag('')
      }
    }
  };

  // removing tags
  const removeTag = (tagindex) => {
    setTags(tags.filter((tag, index) => index !== tagindex));
  };

  // creating post on submit
  const handleCreatePost = async (formdata) => {
    if (!image) {
      cogoToast.error("Please select product thumbnail", {
        position: "top-right",
      });
    } else {
      const formData = serialize(formdata);
      formData.append("author", user?.user?._id);
      formData.append("tags", tags);
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
    history.push("/admin/posts");
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
            <form onSubmit={handleSubmit(handleCreatePost)}>
              <div className="form__left">
                <label htmlFor="title">Post title</label>
                <input type="text" id="title" {...register("title")} />
                <small class="errormsg">
                  {errors?.title ? errors.title?.message : null}
                </small>

                <label className="longdesc">Post description</label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  {...register("description")}
                ></textarea>
                <small class="errormsg">
                  {errors?.description ? errors.description?.message : null}
                </small>
              </div>
              <div className="form__right">
                <div className="publish">
                  <div>
                    <span className="publishContext">
                      Publish your post right away
                    </span>
                  </div>
                  <div className="devider" />

                  <div className="publishh">
                    {postLoading ? (
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

                <div className="tagss">
                  <h5>Tags</h5>

                  <ul>
                    {tags.map((tag, index) => (
                      <li key={index}>
                        <div>
                          <span>{tag}</span>
                          <IoIosClose onClick={() => removeTag(index)} />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="taginput">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      onKeyPress={handleTag}
                      placeholder="Enter your tags"
                    />
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
