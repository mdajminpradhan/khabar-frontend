import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// user routes
import Home from "./user/Home";
import About from "./user/About";
import Menu from "./user/Menu";
import Contact from "./user/Contact";
import Blog from "pages/site/Blog";
import SinglePost from "pages/site/SinglePost";
import Products from "./user/Products";
import UserDashboard from "./user/UserDashboard";

// admin routes
import Admin from "pages/admin/Admin";
import AdminPosts from "pages/admin/post/Posts";
import NewPost from "pages/admin/post/NewPost";
import UpdatePost from "pages/admin/post/UpdatePost";
import AdminProducts from "pages/admin/product/Products";
import NewProduct from "pages/admin/product/NewProduct";
import UpdateProduct from "pages/admin/product/UpdateProduct";
import Categories from "pages/admin/postcategory/Categories";
import NewCategory from "pages/admin/postcategory/NewCategory";
import UpdateCategory from "pages/admin/postcategory/UpdateCategory";
import ProductCategories from "pages/admin/productcategory/Categories";
import NewProductCategory from "pages/admin/productcategory/NewCategory";
import UpdateProductCategory from "pages/admin/productcategory/UpdateCategory";

// auth routes
import Login from "./pages/site/Login";
import Createaccount from "./pages/site/Createaccount";

// Admin route
import AdminRoute from "./utils/AdminRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* admin route */}
        <AdminRoute
          path="/admin/productcategory/update/:category_id"
          exact
          component={UpdateProductCategory}
        />
        <AdminRoute
          path="/admin/productcategory/new"
          exact
          component={NewProductCategory}
        />
        <AdminRoute
          path="/admin/productcategories"
          exact
          component={ProductCategories}
        />
        <AdminRoute
          path="/admin/postcategory/update/:category_id"
          exact
          component={UpdateCategory}
        />
        <AdminRoute
          path="/admin/postcategory/new"
          exact
          component={NewCategory}
        />
        <AdminRoute path="/admin/postcategories" exact component={Categories} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/product/new" exact component={NewProduct} />
        <AdminRoute path="/admin/products" exact component={AdminProducts} />
        <AdminRoute
          path="/admin/post/update/:postId"
          exact
          component={UpdatePost}
        />
        <AdminRoute path="/admin/post/new" exact component={NewPost} />
        <AdminRoute path="/admin/posts" exact component={AdminPosts} />
        <AdminRoute path="/admin" exact component={Admin} />

        {/* user route */}
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/createaccount" exact component={Createaccount} />
        <Route path="/loginaccount" exact component={Login} />
        <AdminRoute path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/post/:postId" exact component={SinglePost} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/About" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
