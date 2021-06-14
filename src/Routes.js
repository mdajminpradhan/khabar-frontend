import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// user routes
import Home from './user/Home';
import About from './user/About';
import Menu from './user/Menu';
import Contact from './user/Contact';
import Blog from './user/Blog';
import Fullpost from './user/Fullpost';
import Products from './user/Products';
import UserDashboard from './user/UserDashboard';

// admin routes
import Admin from './core/admin/AdminBase';
import AdminPosts from './admin/Posts';
import NewPost from './admin/NewPost';
import AdminProducts from './admin/Products';
import UpdatePost from './admin/UpdatePost';
import NewProduct from './admin/NewProduct';
import UpdateProduct from './admin/UpdateProduct';
import Categories from './admin/Categories';
import NewCategory from './admin/NewCategory';
import UpdateCategory from './admin/UpdateCategory';
import ProductCategories from './admin/ProductCategories';
import NewProductCategory from './admin/NewProductCategory';
import UpdateProductCategory from './admin/UpdateProductCategory';

// auth routes
import Login from './auth/Login';
import Createaccount from './auth/Createaccount';

// Admin route
import AdminRoute from './auth/helper/AdminRoutes';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				{/* admin route */}
				<AdminRoute path="/admin/productcategory/update/:category_id" exact component={UpdateProductCategory} />
				<AdminRoute path="/admin/productcategory/new" exact component={NewProductCategory} />
				<AdminRoute path="/admin/productcategories" exact component={ProductCategories} />
				<AdminRoute path="/admin/postcategory/update/:category_id" exact component={UpdateCategory} />
				<AdminRoute path="/admin/postcategory/new" exact component={NewCategory} />
				<AdminRoute path="/admin/postcategories" exact component={Categories} />
				<AdminRoute path="/admin/product/update" exact component={UpdateProduct} />
				<AdminRoute path="/admin/product/new" exact component={NewProduct} />
				<AdminRoute path="/admin/products" exact component={AdminProducts} />
				<AdminRoute path="/admin/post/update" exact component={UpdatePost} />
				<AdminRoute path="/admin/post/new" exact component={NewPost} />
				<AdminRoute path="/admin/posts" exact component={AdminPosts} />
				<AdminRoute path="/admin" exact component={Admin} />

				{/* user route */}
				<Route path="/user/dashboard" exact component={UserDashboard} />
				<Route path="/createaccount" exact component={Createaccount} />
				<Route path="/loginaccount" exact component={Login} />
				<AdminRoute path="/contact" exact component={Contact} />
				<Route path="/products" exact component={Products} />
				<Route path="/post" exact component={Fullpost} />
				<Route path="/blog" exact component={Blog} />
				<Route path="/About" exact component={About} />
				<Route path="/menu" exact component={Menu} />
				<Route path="/" exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
