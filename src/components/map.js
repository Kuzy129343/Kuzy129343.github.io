import React from 'react';

const Map = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="map-title">
                    <h1>Where Credit Transformation Happens</h1>
                </div>
                <div className="map-holder">
                    <div className="map-image">
                        <img src="/asset/map.png" alt="" className="map-img" />
                    </div>
                    <div className="map-states">
                        <div className="map-state">
                            <p className="map-item">Head Office in LA</p>
                        </div>
                        <div className="map-state">
                            <p className="map-item">Office in Chicago</p>
                        </div>
                        <div className="map-state">
                            <p className="map-item">Office in Delaware</p>
                        </div>
                        <div className="map-state">
                            <p className="map-item">Office in Washington</p>
                        </div>
                        <div className="map-state">
                            <p className="map-item">Office in Miami</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;
