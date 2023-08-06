import React from "react";
import "../styles/home-services.css";

export default function HomeServices() {
    return (
        <div className="home-services">
            <div className="home-services-text">
                <h1>Services</h1>
                <div className="services">
                    <div className="service-section">
                        <div className="service-title">Service 1</div>
                        <div className="service-descipt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className="service-section">
                        <div className="service-title">Service 2</div>
                        <div className="service-descipt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className="service-section">
                        <div className="service-title">Service 3</div>
                        <div className="service-descipt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}