import React, { useEffect } from "react";
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
import { useGetPosts, useDeletePost } from "apicalls/hooks/admin/usePost";

const PostTable = () => {
  const { data, isLoading } = useGetPosts();
  const { mutateAsync } = useDeletePost();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // triger the function when user submit
  const handleDeletePost = async (cateId) => {
    try {
      await mutateAsync(cateId);
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

  // posts count start from zero
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
          data?.map((post, index) => (
            <div className="tablerow">
              <div>{count++}</div>
              <div>
                <Image publicId={post?.pictureid} width="300" crop="scale" />
              </div>
              <div className="title">{post?.title || "Post title"}</div>
              <div>Category</div>
              <div className="comment">3</div>
              <div className="actions">
                <Link to={`/admin/post/update/${post?._id}`}>
                  <HiPencil />
                </Link>
                <AiOutlineDelete
                  onClick={() => {
                    handleDeletePost(post?._id);
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

export default PostTable;
