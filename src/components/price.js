import React, { useEffect, useRef } from 'react';

const Price = () => {
    const creditRangeRef = useRef();
    const creditAmountRef = useRef();
    const depositAmountRef = useRef();
    const thumbImageRef = useRef();

    useEffect(() => {
        const creditRange = creditRangeRef.current;
        const creditAmount = creditAmountRef.current;
        const depositAmount = depositAmountRef.current;
        const thumbImage = thumbImageRef.current;

        function handleInput() {
            creditAmount.innerHTML = this.value;
            depositAmount.innerHTML = this.value * 0.3;

            let thumbWidth = 25;
            let trackWidth = this.offsetWidth - thumbWidth; 
            let range = this.max - this.min;
            let position = (this.value - this.min) / range * trackWidth + thumbWidth / 2; 

            this.style.background = `linear-gradient(to right, #ff6600 ${position}px, #d3d3d3 ${position}px)`;

            thumbImage.style.left = `${position - thumbImage.offsetWidth / 2}px`;
        }

        creditRange.addEventListener('input', handleInput);
        handleInput.call(creditRange);

        return () => {
            creditRange.removeEventListener('input', handleInput);
        };
    }, []);

    return (
        <section className="price">
            <div className="container">
                <div className="card" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <div className="card-holder">
                        <div className="card-info">
                            <div className="prise-title">
                                <h1 className="title-1">Choose the amount you want to receive and we will calculate the loan for you</h1>
                            </div>
                            <div className="range-container">
                                <input type="range" min="6000" max="300000" value="6000" step="1000" className="slider" id="creditRange" ref={creditRangeRef} />
                                <img src="/asset/mini-range.png" alt="" className="thumb-image" ref={thumbImageRef} />
                            </div>
                            <div className="range-price">
                                <h3 className="creditAmount"><span id="creditAmount" ref={creditAmountRef}>6 000</span>$</h3>
                                <h3 className="depositAmount"><span id="depositAmount" ref={depositAmountRef}>1 800</span> deposit</h3>
                                <h4>6 000$ the cost of obtaining a loan</h4>
                            </div>
                        </div>

                        <div className="card-img">
                            <img className="card-image" src="/asset/range.png" alt="" />
                        </div>
                    </div>  
                    <form className="form-inline" action="">
                        <input type="text" id="name" placeholder="Name" name="name" />
                        <input type="tel" id="phone" placeholder="Phone" name="phone" />
                        <input type="email" id="email" placeholder="Email" name="email" />
                    </form>
                    <div className="btn-form">
                        <button className="btn" type="submit"><a>Submit to application</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;
