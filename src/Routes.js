import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './user/Home'
import About from './user/About'
import Menu from './user/Menu'
import Contact from './user/Contact'
import Blog from './user/Blog'
import Fullpost from './user/Fullpost'
import Products from './user/Products'
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        {/* admin route */}
        <Route path="/admin/category/update" exact component={UpdateCategory} />
        <Route path="/admin/category/new" exact component={NewCategory} />
        <Route path="/admin/categories" exact component={Categories} />
        <Route path="/admin/product/update" exact component={UpdateProduct} />
        <Route path="/admin/product/new" exact component={NewProduct} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path="/admin/post/update" exact component={UpdatePost} />
        <Route path="/admin/post/new" exact component={NewPost} />
        <Route path="/admin/posts" exact component={AdminPosts} />
        <Route path="/admin" exact component={Admin} />

        {/* user route */}
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
