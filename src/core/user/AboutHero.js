import React from 'react'
import { Link } from 'react-router-dom'

const AboutHero = () => {
    return (
        <div className="abouthero">
            <div className="container">
                <div className="abouthero__left">
                    <h2>Wellome!</h2>
                    <h1>Best burger ideas & traditions from the whole world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p> Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                    <Link to="/contact"><button>Contact Now</button></Link>
                </div>
                <div className="abouthero__right"></div>
            </div>
        </div>
    )
}

export default AboutHero
