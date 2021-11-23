import React, { useState, useEffect } from "react";
import "assets/sass/core/sidebar.scss";
import { useLocation } from "react-router-dom";

// importing components
import RecentPost from "./RecentPost";
import SidebarCategories from "./SidebarCategories";
import SidebarSearch from "./SidebarSearch";
import SidebarTags from "./SidebarTags";
import SideCallToAction from "./SideCallToAction";

// importing api hook
import { useGetSidebarCategories } from "apicalls/hooks/site/useSidebar";
import { useGetPostCategories } from "apicalls/hooks/site/usePostCategory";
import { useGetProductCategories } from "apicalls/hooks/site/useProductCategory";

const Sidebar = () => {
  
  const {data} = useGetPostCategories()
  const {data: productData} = useGetProductCategories()
  
  // const [postOrProduct, setPostOrProduct] = useState("");
  // const [apiEndPoint, setApiEndPoint] = useState("");

  // const { pathname } = useLocation();
  // const location = pathname?.split("/");

  // useEffect(() => {
  //   location?.map((item) => {
  //     if (item === "blog") {
  //       setPostOrProduct("postcategories");
  //       setApiEndPoint("/postcategories");
  //       // console.log(item);
  //     }
  //   });
  // }, []);

  // const { data, isLoading } = useGetSidebarCategories(
  //   postOrProduct,
  //   apiEndPoint
  // );

  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <SidebarSearch />
      </div>

      <div className="sidebar__categories">
        <SidebarCategories />
      </div>

      <div className="sidebar__recentPosts">
        <h3>Recent posts</h3>
        <span className="devider" />

        <RecentPost />
        <RecentPost />
        <RecentPost />
      </div>

      <div className="sidebar__tags">
        <SidebarTags />
      </div>

      <div className="sidebar__calltoaction">
        <SideCallToAction />
      </div>
    </div>
  );
};

export default Sidebar;
