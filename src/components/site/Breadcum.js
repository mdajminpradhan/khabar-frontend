import React from 'react'
import 'assets/sass/core/breadcum.scss'

// importing libraries
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';


const Breadcum = ({title = 'Page title', description = 'Page description'}) => {
    return (
        <div className="breadcum">
            <h1>{title}</h1>
            <p><Link href="/">Home</Link> <IoIosArrowForward /> {description}</p>
        </div>
    )
}

export default Breadcum
