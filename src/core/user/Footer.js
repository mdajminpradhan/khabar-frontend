import React from 'react'
import '../../assets/sass/core/footer.scss';
import CardOne from '../../assets/images/homepage/footer/1.png';
import CardTwo from '../../assets/images/homepage/footer/2.png';
import CardThree from '../../assets/images/homepage/footer/3.png';
import CardFour from '../../assets/images/homepage/footer/4.png';
import CardFive from '../../assets/images/homepage/footer/5.png';
import CardSix from '../../assets/images/homepage/footer/6.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

            <p>Copyright © 2021 <a href="https://imajmin.netlify.app" target="__blank">Mr Pradhan</a>. All Rights Reserved.</p>
            <div>
                <img src={CardOne} alt="cards" />
                <img src={CardTwo} alt="cards" />
                <img src={CardThree} alt="cards" />
                {/* <img src={CardFour} alt="cards" /> */}
                <img src={CardFive} alt="cards" />
                <img src={CardSix} alt="cards" />
            </div>
        </div>
        </div>
    )
}

export default Footer
