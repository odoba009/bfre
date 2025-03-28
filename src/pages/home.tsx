import "./css/homepage.css";
import React from "react";
import Cancel from "../assets/cancel.png";
import Menu from "../assets/menu.png";
import templady from "../assets/open-account.jpg";
import market from "../assets/grow-business.jpg";

export default function Home() {
    const [isAuthenticated] = React.useState(false);

    const toggleNavBar = () => {
        document.getElementById('nav_menu')?.classList.toggle('hide');
        document.getElementById('close')?.classList.toggle('hide');
        document.getElementById('menu')?.classList.toggle('hide');
    }

    return (
        <div>
            <div className="my-navbar">
                <div className="navbar-flex">
                    <div className="brand">
                        <div className="brand-link">
                            <a href="">TrustFunds</a>
                        </div>
                    </div>

                    <div className="navbar-options-container">
                        <div className="navbar-options-flex">
                            <div className="navbar-options">
                                <ul>
                                    <li className="navbar-options-list">
                                        <a href="">CUSTOMER PRODUCTS</a>
                                    </li>
                                    <li className="navbar-options-list">
                                        <a href="">BUSINESS SOLUTIONS</a>
                                    </li>
                                    <li className="navbar-options-list">
                                        <a href="">RESOURCES</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="navbar-auth">
                                {isAuthenticated ? (
                                    <>
                                        <div className="nav-login">
                                            <div className="nav-auth-link">
                                                <a href="">LOGOUT</a>
                                            </div>
                                        </div>
                                        <div className="nav-signup">
                                            <div className="nav-auth-link">
                                                <a href="{{url_for('user.dashboard')}}">DASHBOARD</a>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        <div className="nav-login">
                                            <div className="nav-auth-link">
                                                <a href="/login">LOGIN</a>
                                            </div>
                                        </div>
                                        <div className="nav-signup">
                                            <div className="nav-auth-link">
                                                <a href="/">
                                                    OPEN AN ACCOUNT
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="small-screen-menu">
                        <div id="close" className="hide">
                            <button onClick={() => toggleNavBar()}>
                                <img
                                    src={Cancel}
                                    alt=""
                                />
                            </button>
                        </div>

                        <div id="menu" className="">
                            <button onClick={() => toggleNavBar()}>
                                <img
                                    src={Menu}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="nav_menu" className="navbar-options-small-screen hide">
                <a href="">
                    <div className="small-screen-menu-options">
                        <p>CUSTOMER PRODUCTS</p>
                    </div>
                </a>
                <a href="">
                    <div className="small-screen-menu-options">
                        <p>BUSINESS SOLUTIONS</p>
                    </div>
                </a>
                <a href="">
                    <div className="small-screen-menu-options">
                        <p>RESOURCES</p>
                    </div>
                </a>

                <a href="/login">
                    <div
                        style={{ backgroundColor: "black", color: "white" }}
                        className="small-screen-menu-options"
                    >
                        <p>LOGIN</p>
                    </div>
                </a>

                <a href="{{url_for('auth.register')}}">
                    <div
                        style={{ backgroundColor: "#1ecad3", color: "white" }}
                        className="small-screen-menu-options"
                    >
                        <p>OPEN AN ACCOUNT</p>
                    </div>
                </a>
            </div>

            <div className="banner" style={{ textAlign: "center", color: "white", padding: "50px 0" }}>
                <p style={{ fontSize: 30, margin: "20px 0" }}>Spend. Save. Earn</p>
                <p>Earn 5% APY* on up to $25,000 with Dividend Rewards Checking when monthly qualifications are met.</p>
                <button className="btn-info" style={{ margin: "20px 0" }}>Learn more</button>
            </div>



            <div className="centered-headline">
                <p>
                    We believe that financial access and control is a fundamental <br />
                    human right enabled through banking.
                </p>

                <h2>GET UNBANKED</h2>
            </div>

            <div className="additional-section-container">
                <div className="additional-section-item">
                    <div className="additional-section-image">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            src={templady}
                            alt=""
                        />
                    </div>
                    <div className="additional-section-text">
                        <h2>OPEN AN ACCOUNT</h2>
                        <p>
                            Connect your digital assets to accounts in 200+ countries, whether you
                            custody your own funds or we take care of it for you.
                        </p>
                        <br />
                        <div className="gradient-button">
                            <a href="">GET STARTED</a>
                        </div>
                    </div>
                </div>

                <div className="additional-section-item">
                    <div className="additional-section-image">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            src={market}
                            alt=""
                        />
                    </div>
                    <div className="additional-section-text">
                        <h2>BUSSINESS SOLUTIONS</h2>
                        <p>
                            Connect your digital assets to accounts in 200+ countries, whether you
                            custody your own funds or we take care of it for you.
                        </p>
                        <br />
                        <div className="gradient-button">
                            <a href="">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-2" style={{margin:"20px 0"}}>
                <p className="sub-heading">Special Auto Loan Rates Available</p>
                <p>Our car loan rates recently dropped by 0.50% on all model years and terms. Rates are as low as 5.19% APR for a limited time only!</p>
            </div>
        </div>
    )
}
