import React from 'react'
import 'assets/sass/admin/components/adminbase.scss'

// importing libraries
import { FiSearch } from 'react-icons/fi';
import { logoutAccount } from '../../auth/helper/apicall';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import cogoToast from 'cogo-toast';

// importing component
import AdminLeft from 'components/admin/AdminLeft'


const Admin = ({history, children}) => {

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
                        <span className='user'>Mr Pradhan,</span>
                        <span className="logout" onClick={() => {
                            logoutAccount(() => {
                                history.push('/loginaccount');
						        cogoToast.success('Your have logged out successfully...', { position: 'top-right' });
                            })
                        }}>Logout</span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default withRouter(Admin)
