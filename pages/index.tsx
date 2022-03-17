/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import { useAppContext } from '../components/App'
import FixtureList from '../components/EventList'
import { http } from '../lib/common'
import { SWRConfig } from 'swr'
import Advert from '../components/Advert'
import Image from 'next/image'

const Home: NextPage = ({ fallback }: any) => {
    const settings: any = useAppContext()

    return (
        <SWRConfig value={{ fallback }}>
            <Layout
                title={`${settings.site_name} - Your No1 Sport Streaming Portal`}>
                <div className="banner">
                    <div className="container">
                        <div className="banner-content">
                            <div className="row justify-content-xl-start justify-content-lg-center justify-content-md-center">
                                <div className="col-xl-7 col-lg-11 col-md-10 col-12 d-xl-flex d-lg-flex d-block align-items-center">
                                    <div className="text-content">
                                        <h1>{settings.hero_title}.</h1>
                                        <h4>{settings.hero_subtitle}</h4>
                                        <p>{settings.hero_description}</p>
                                        <div className="banner-button">
                                            <ul>
                                                <li>
                                                    <a
                                                        className="bet-btn bet-btn-base"
                                                        href="#today">
                                                        Today Matches
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/articles">
                                                        <a className="bet-btn bet-btn-border">
                                                            Sport Articles
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4">
                                    <div className="banner-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Advert placement="header" />

                <div className="container my-2 mx-auto text-center">
                    <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_47161c_&site=1456057&ad=47161" ></iframe>

                    <a
                        href="https://candytrade.net"
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
                <FixtureList />
            </Layout>
        </SWRConfig>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await http.get('/api/events')

    const fixtures = response.data

    return {
        props: {
            fallback: {
                '/api/events': fixtures
            }
        },
        revalidate: 60
    }
}
export default Home
