/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const MainNav = () => {
    return (
        <div id="navbar" className="header-bottom">
            <div className="container">
                <div className="row py-2">
                    <div className="col-md-3">
                        <div className="logo">
                            <Link href="/">
                                <a className="logo" href="index.html">
                                    <img
                                        src="/assets/images/logo.png"
                                        alt="site-logo"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9"></div>
                </div>
            </div>
        </div>
    )
}

export default MainNav
