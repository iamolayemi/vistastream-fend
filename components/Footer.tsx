/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useAppContext } from './App'
import Advert from './Advert'
import Image from 'next/image'

const Footer = () => {
    const settings: any = useAppContext()

    return (
        <React.Fragment>
            <div className="container my-4 mx-auto text-center">
            <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_30063c_&site=1456057&ad=30063" ></iframe>
                <a
                    href="https://wa.link/081vh3"
                    target="_blank"
                    rel="noreferrer">
                    <Image
                        className="image-fluid"
                        src="/assets/images/cd-lead.svg"
                        width="730"
                        height="90"
                        alt="candytrade"
                    />
                </a>
            </div>
            <Advert placement="footer" />

            <div className="footer" id="contact">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-7 col-lg-8 col-md-9">
                            <div className="about-widget">
                                <Link href="/">
                                    <a className="logo" href="index.html">
                                        <img
                                            src="/assets/images/logo.png"
                                            alt="site-logo"
                                        />
                                    </a>
                                </Link>
                                <p>{settings.about_text}</p>
                                <div className="social">
                                    <ul>
                                        <li>
                                            <a
                                                href={settings.facebook_url}
                                                className="social-icon">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                href={settings.twitter_url}
                                                className="social-icon">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                href={settings.instagram_url}
                                                className="social-icon">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="support pb-3">
                                    <ul>
                                        <li>
                                            <span className="icon">
                                                <img
                                                    src="/assets/images/svg/email.svg"
                                                    alt="email icon"
                                                />
                                            </span>
                                            <span className="text">
                                                <span className="title">
                                                    Mail Us
                                                </span>
                                                <span className="descr">
                                                    {settings.contact_email}
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img
                                                    src="/assets/images/svg/phone-call.svg"
                                                    alt="call icon"
                                                />
                                            </span>
                                            <span className="text">
                                                <span className="title">
                                                    Get In Touch
                                                </span>
                                                <span className="descr">
                                                    {settings.contact_phone}
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-4 col-md-3">
                            <div className="useful-links">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>
                                        <Link href="/fixtures">
                                            <a>Fixtures</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/live">
                                            <a>Livescores</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notes">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            {settings.footer_disclaimer}
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-md-6 col-lg-6 d-lg-flex d-lg-flex d-block align-items-center">
                            <p className="copyright-text">
                                © {new Date().getFullYear()} -{' '}
                                <Link href="/">
                                    <a>{settings.site_name}</a>
                                </Link>
                                . All Rights Reserved.
                            </p>
                        </div>
                        <div className="text-right col-md-6 col-xl-4 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <p className="copyright-text">
                                Created and Designed By{' '}
                                <a
                                    href="https://olatayoolayemi.xyz"
                                    target="_blank"
                                    rel="noreferrer">
                                    {' '}
                                    Olatayo Olayemi
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                dangerouslySetInnerHTML={{
                    __html: settings.footer_analytics_code
                }}
            />
        </React.Fragment>
    )
}

export default Footer
