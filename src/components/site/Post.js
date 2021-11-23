import React, { useEffect } from "react";
import "assets/sass/core/post.scss";
import thumbnail from "assets/images/homepage/posts/post.jpg";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import dayjs from "dayjs";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__thumbnail">
        <Image
          publicId={post?.pictureid || thumbnail}
          width="300"
          crop="scale"
        />
      </div>
      <div className="post__content">
        <small>
          {post?.category[0]?.title} /{" "}
          {dayjs(post?.createdAt).format("MMM DD YYYY")} / post by{" "}
          {post?.author?.name}
        </small>

        <h1>{post?.title || "Post title"}</h1>

        <p>{post?.description || "Post description"}</p>

        <Link to={`/post/${post?._id}`}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
