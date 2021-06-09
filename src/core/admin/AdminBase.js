import React from 'react'
import '../../assets/sass/admin/components/adminbase.scss'
import AdminLeft from './AdminLeft'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Admin = ({children}) => {
    return (
        <div className="adminbase">
            <div className="adminbase__left">
                <AdminLeft />
            </div>
            <div className="adminbase__right">
                <div className="adminbase__rightTop">
                    <div className="adminbase__rightTopSearch">
                        <form action="">
                            <input type="text" placeholder="Search..." />
                            <FiSearch />
                        </form>
                    </div>
                    <div className="adminbase__rightTopAdmin">
                        <span>Mr Pradhan,</span>
                        <Link to="/">Logout</Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Admin
