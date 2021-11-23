import React from "react";
import "assets/sass/user/fullpost.scss";
import "assets/sass/core/post.scss";
import thumbnail from "assets/images/homepage/posts/post.jpg";

// importing libraries
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Image } from "cloudinary-react";

// importing components
import Base from "components/site/Base";
import Breadcum from "components/site/Breadcum";
import Sidebar from "components/site/Sidebar";

// importing api hook
import { useGetPostById } from "apicalls/hooks/site/usePost";

const SinglePost = () => {
  const { postId } = useParams();

  const { data } = useGetPostById(postId);

  return (
    <Base>
      <div className="fullpost">
        <Breadcum title="Our Blog" description={data?.title || "Post title"} />
        <div className="container">
          <div className="fullpost__container">
            <div className="fullpost__left">
              <div className="post">
                <div className="post__thumbnail">
                  {/* <img src={thumbnail} alt="post thumbnail" /> */}
                  <Image
                    publicId={data?.pictureid || thumbnail}
                    width="300"
                    crop="scale"
                  />
                </div>
                <div className="post__content">
                  <small>
                    {data?.category?.map((cate) => cate?.title + ", ")} /{" "}
                    {dayjs(data?.createdAt).format("MMM DD YYYY")} / post by{" "}
                    {data?.author?.name || "Author"}
                  </small>

                  <h1>{data?.title}</h1>

                  <div>{data?.description}</div>
                </div>
              </div>

              <div className="prevpost">
                <small>PREV POST</small>
                <Link to="/post">
                  The Ultimate Hangover Burger: Egg in a Hole Burger Grilled
                  Cheese
                </Link>
              </div>

              <div className="comment">
                <form action="">
                  <div className="input">
                    <input type="text" placeholder="Your name *" required />
                    <input
                      type="email"
                      placeholder="Email address *"
                      required
                    />
                    <input type="text" placeholder="Your website" />
                  </div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your comment"
                  />
                  <button>POST COMMENT</button>
                </form>
              </div>
            </div>
            <div className="fullpost__right">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default SinglePost;
