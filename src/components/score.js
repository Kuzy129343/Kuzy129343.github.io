import React from 'react';

const Score = () => {
    return (
        <section className="score">
            <div className="container">
                <div className="score-title">
                    <h1>We are committed to improving your credit score</h1>
                </div>

                <div className="credit-score">
                    <div id="speedometer">
                        <span className="barometer"></span>
                        <span className="needle"></span>
                    </div>

                    <div className="credit-score-container">
                        <div className="score-info" data-aos="zoom-in">
                            <div className="credit-item">
                                <h1>We Check</h1>
                                <h2>For $1, scan your reports and identify all removable items</h2>
                            </div>
                            <div className="credit-item">
                                <h1>We Fix</h1>
                                <h2>Remove negative items from all three reports</h2>
                            </div>
                            <div className="credit-item">
                                <h1>We Build</h1>
                                <h2>Add positive tradelines and grow your credit history</h2>
                            </div>
                            <div className="credit-item">
                                <h1>Get Funded</h1>
                                <h2>Get the funding you need and unlock lending potential</h2>
                            </div>
                        </div>
                    </div>

                    <div className="score-suptitle" data-aos="zoom-in">
                        <div className="suptitle-item1">
                            <p className="title-3 item1">We work with both legal and physical persons</p>
                        </div>
                        <div className="suptitle-item2">
                            <p className="title-3 item2">The lowest percentage on the market</p>
                        </div>
                        <div className="suptitle-item3">
                            <p className="title-3">100% money back if we do not meet the conditions</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Score;
