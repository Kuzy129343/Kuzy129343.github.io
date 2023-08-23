import React from 'react';

const Company = () => {
    return (
        <div className="company">
            <div className="container">
                <div className="company-holder">
                    <div className="company-title">
                        Companies we have worked with
                    </div>
                    <div className="company-image" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                        <img src="/asset/company1.png" alt="" className="company-img" />
                        <img src="/asset/company2.png" alt="" className="company-img" />
                        <img src="/asset/company3.png" alt="" className="company-img" />
                        <img src="/asset/company4.png" alt="" className="company-img" />
                        <img src="/asset/company5.png" alt="" className="company-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;
