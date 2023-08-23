import React, { useEffect, useRef } from 'react';

const Header = () => {

    const menuBtnRef = useRef();
    const mobileNavRef = useRef();

    useEffect(() => {
        const menuBtn = menuBtnRef.current;
        const mobileNav = mobileNavRef.current;

        function handleClick() {
            mobileNav.classList.toggle('open');
            menuBtn.classList.toggle('open');
        }

        menuBtn.addEventListener('click', handleClick);

        return () => {
            menuBtn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header-line" data-aos="fade-down">
                    <div className="header-logo">
                        <img src="/asset/Logo.png" alt="" className="header-logo-img" />
                    </div>

                    <div className="header-nav">
                        <a className="header-nav-item">Services</a>
                        <a className="header-nav-item">Advantages</a>
                        <a className="header-nav-item">How we work</a>
                        <a className="header-nav-item">Our YouTube</a>
                    </div>
                    <div className="number">
                        <a className='num' href='#'>(866) 622-6678</a>
                    </div>

                    <div className="circle">

                    </div>
                </div>

                <div className='header-down' data-aos="zoom-in-down">
                    <div className='header-title'>
                        Boost Your Credit Score with Ease
                        <div className='header-suptitle'>
                            Your Solution to Credit. Fast.
                        </div>

                        <div className='header-bth'>
                            <button><a href='#' className='header-button'>To get a consultation</a></button>
                        </div>

                    </div>
                </div>

                <div className="header-supdown" >
                    <div className="left">
                        <span>6400</span> clients
                    </div>
                    <div className="right">
                        <span>18</span> years of work
                    </div>
                </div>
            </div>

            <div className="menu-btn" ref={menuBtnRef}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className="mobile-nav" ref={mobileNavRef}>
                <a className="mobile-nav-item">Services</a>
                <a className="mobile-nav-item">Advantages</a>
                <a className="mobile-nav-item">How we work</a>
                <a className="mobile-nav-item">Our YouTube</a>
            </nav>

        </header>
    );
}

export default Header;
