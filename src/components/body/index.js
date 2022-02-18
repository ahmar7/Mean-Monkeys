import React from 'react';
import ColorText from '../../assets/images/Transparent Mean Monkeys Colorful Font Logo -01.png'
import './style.css'
import Instagram from '../../assets/images/instagram.svg'
import Twitter from '../../assets/images/twitter-logo.svg'
import Discord from '../../assets/images/discord-logo.svg'
import Marquee from "react-easy-marquee";
import Whitetext from '../../assets/images/no boder no accent white Mean Monkeys Font-01.png'
const Body = () => {
    return (
        <div>
            <div className='font-logo'>
                <div className='top-logo'>
                    <img src={ColorText} />
                </div>
                <div className='remaining-text'>
                    <h1>speak your truth.</h1>
                </div>
                <div className='btns'>
                    <a href='#'> <button>twitter</button></a>
                    <a href='#'> <button>discord</button></a>

                </div>
                <div className='text-mark'>
                    <Marquee className='mark' duration={25000} background="#fafafa " height='40px' reverse={true}>
                        <h1>dropping April 2022 | COMING SOON | dropping April 2022 | COMING SOON | dropping April 2022 | COMING SOON | dropping April 2022 | COMING SOON | dropping April 2022 | COMING SOON |  </h1>


                    </Marquee>
                    <div className='right-align body-item'>
                        <ul className='social-ul'>
                            <a href='#'><li> <img className='insta' src={Instagram} /> </li></a>
                            <a href='#'><li> <img src={Twitter} /> </li></a>
                            <a href='#'><li> <img src={Discord} /> </li></a>

                        </ul>
                        <div className='img'>
                            <img className='white-txt' src={Whitetext} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Body;
