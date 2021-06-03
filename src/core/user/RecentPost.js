import React from 'react'
import '../../assets/sass/core/recentpost.scss'
import thumbnail from '../../assets/images/blog/recentpost/1.jpg'

const RecentPost = () => {
    return (
        <div className="recent__post">
            <div className="recentpost__thumbnail">
                <img src={thumbnail} alt="post thumbnail" />
            </div>
            <div className="recentpost__content">
                <span>10 Reasons To Do A Digital Detox Challenge</span>
                <small>September 7, 2021</small>
            </div>
        </div>
    )
}

export default RecentPost
