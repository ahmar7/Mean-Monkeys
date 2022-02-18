import React from 'react';
import Emblem from '../../assets/images/B_W Emblem-01.png'
import Instagram from '../../assets/images/instagram.svg'
import Twitter from '../../assets/images/twitter-logo.svg'
import Discord from '../../assets/images/discord-logo.svg'
import './style.css'
const Header = () => {
    return (
        <div className='main-container'>
            <div className='header'>
                <div className='left-align'>
                    <img src={Emblem} />
                </div>
                <div className='right-align'>
                    <ul className='social-ul'>
                        <a href='#'><li> <img className='insta' src={Instagram} /> </li></a>
                        <a href='#'><li> <img src={Twitter} /> </li></a>
                        <a href='#'><li> <img src={Discord} /> </li></a>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
