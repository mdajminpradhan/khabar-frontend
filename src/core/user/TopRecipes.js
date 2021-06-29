import React from 'react'
import '../../assets/sass/core/toprecipes.scss';

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import SideCallToAction from './SideCallToAction';

const TopRecipes = () => {
    return (
        <div className="toprecipes">
            <div className="container">
                <div className="toprecipes__left">
                    <div className="toprecipes__leftHeader">
                        <h1>Top recipes</h1>
                        <Link to="something">See all <IoIosArrowForward /></Link>
                    </div>
                    <div className="toprecipes__leftBody">
                        <Recipe category="true" />
                        <Recipe category="true" />
                        <Recipe category="true" />
                        <Recipe category="true" />
                        <Recipe category="true" />
                        <Recipe category="true" />
                    </div>
                </div>
                <div className="toprecipes__right">
                    <SideCallToAction />
                </div>
            </div>
        </div>
    )
}

export default TopRecipes
