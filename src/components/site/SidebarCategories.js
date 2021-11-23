import React from "react";
import "assets/sass/core/sidebarcategories.scss";

// importing libraries
import { GiHamburger } from "react-icons/gi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SidebarCategories = () => {
  return (
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        {/* {isLoading ? (
          <Skeleton count={5} />
        ) : ( 
          data?.map((cate) => ( */}
            <li>
              <div>
                <GiHamburger />
                <span>Pizza</span>
              </div>
              <span>(9)</span>
            </li>
          {/* ))
        )} */}
      </ul>
    </div>
  );
};

export default SidebarCategories;
