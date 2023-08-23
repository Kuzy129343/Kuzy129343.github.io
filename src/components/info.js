import React from 'react';

const Info = () => {
    return (
        <section className="info">
            <div className="container">
                <div className="info-holder">
                    <div className="info-left" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        <div className="left-title">
                            Our goal is for you to pay less to banks and be able to invest more in your own business
                        </div>
                        <div className="left-suptitle">
                            <p>We use our knowledge and connections with <strong>8 major banks</strong> to open all the doors necessary for business growth and developmen</p>
                        </div>
                    </div>
                    <div className="info-right" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        <div className="right-block">
                            <div className="right-title">
                                Correction of <span>credit history</span>
                                <div className="right-suptitle">
                                    Use bank capital to grow or start your own business!
                                    <div className="right-button">
                                        <a href="#" className="right-btn">Submit to application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-block one">
                            <div className="right-title">
                                <span>Assistance</span> with financing
                                <div className="right-suptitle">
                                    Use bank capital to grow or start your own business!
                                    <div className="right-button">
                                        <a href="#" className="right-btn">Submit to application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
