import React from 'react';

const Avantages = () => {
    return (
        <section className="avantages">
            <div className="container">
                <div className="advantages-title">
                    <h1 className="title-2">We treat your data as if it was our own</h1>
                </div>
                <div className="avantages-items" data-aos="fade-down">
                    <div className="avantages-item">
                        <h1 className="avantages-item-title">Security</h1>
                        <p>We use 128-bit encryption to protect the transmission of your data to our site</p>
                    </div>
                    <div className="avantages-item line">
                        <h1 className="avantages-item-title">Privacy</h1>
                        <p>We do not share your personal information with unaffiliated third parties for their own marketing purposes.</p>
                    </div>
                    <div className="avantages-item">
                        <h1 className="avantages-item-title">Guarantee</h1>
                        <p>We guarantee our work. You get results or you don’t pay.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Avantages;
