import BreadCrumb from '../components/BreadCrumb'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextPage } from 'next'
import Advert from '../components/Advert'

const PageNotFound: NextPage = () => {
    return (
        <Layout title={`404 | Page Not Found`}>
            <BreadCrumb title="Page Not Found" />
            <Advert placement="header" />
            <div className="container my-2 text-center">
            <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_32447c_&site=1456057&ad=32447" ></iframe>
                <a
                    href="https://wa.link/081vh3"
                    target="_blank"
                    rel="noreferrer"
                    className="container mx-auto text-center">
                    <Image
                        className="image-fluid"
                        src="/assets/images/cd-lead.svg"
                        width="730"
                        height="90"
                        alt="candytrade"
                    />
                </a>
            </div>
            <div className="error">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="part-img">
                                <Image
                                    src="/assets/images/error.png"
                                    alt="error-image"
                                    width="565"
                                    height="321"
                                    className="mx-auto"
                                />
                            </div>
                            <div className="part-text">
                                <h4>Sorry, This page was not found!</h4>
                                <Link href="/">
                                    <a className="back-to-home-btn">
                                        Back to home
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PageNotFound
