import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// user routes
import Home from './user/Home'
import About from './user/About'
import Menu from './user/Menu'
import Contact from './user/Contact'
import Blog from './user/Blog'
import Fullpost from './user/Fullpost'
import Products from './user/Products'
import UserDashboard from './user/UserDashboard'

// admin routes
import Admin from './core/admin/AdminBase'
import AdminPosts from './admin/Posts'
import NewPost from './admin/NewPost'
import AdminProducts from './admin/Products'
import UpdatePost from './admin/UpdatePost'
import NewProduct from './admin/NewProduct'
import UpdateProduct from './admin/UpdateProduct'
import Categories from './admin/Categories'
import NewCategory from './admin/NewCategory'
import UpdateCategory from './admin/UpdateCategory'
import ProductCategories from './admin/ProductCategories'
import NewProductCategory from './admin/NewProductCategory'
import UpdateProductCategory from './admin/UpdateProductCategory'

// auth routes
import Login from './auth/Login'
import Createaccount from './auth/Createaccount'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        {/* admin route */}
        <Route path="/admin/category/product/update" exact component={UpdateProductCategory} />
        <Route path="/admin/category/product/new" exact component={NewProductCategory} />
        <Route path="/admin/categories/product" exact component={ProductCategories} />
        <Route path="/admin/category/post/update" exact component={UpdateCategory} />
        <Route path="/admin/category/post/new" exact component={NewCategory} />
        <Route path="/admin/categories/post" exact component={Categories} />
        <Route path="/admin/product/update" exact component={UpdateProduct} />
        <Route path="/admin/product/new" exact component={NewProduct} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path="/admin/post/update" exact component={UpdatePost} />
        <Route path="/admin/post/new" exact component={NewPost} />
        <Route path="/admin/posts" exact component={AdminPosts} />
        <Route path="/admin" exact component={Admin} />

        {/* user route */}
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/createaccount" exact component={Createaccount} />
        <Route path="/loginaccount" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/post" exact component={Fullpost} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/About" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
