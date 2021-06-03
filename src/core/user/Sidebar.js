import React from 'react';
import '../../assets/sass/core/sidebar.scss'
import RecentPost from './RecentPost';
import SidebarCategories from './SidebarCategories';
import SidebarSearch from './SidebarSearch';
import SidebarTags from './SidebarTags';
import SideCallToAction from './SideCallToAction';

const Sidebar = () => {
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
}

export default Sidebar;
