import { NextPage } from 'next'
import BreadCrumb from '../../components/BreadCrumb'
import { Layout } from '../../components/Layout'
import Advert from '../../components/Advert'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const LiveScore: NextPage = ({ fallback }: any) => {
    const aiscore = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (aiscore.current !== null) {
            aiscore.current.innerHTML =
                "<iframe src='https://www.aiscore.com?width=943&theme=red' height='100%' width='943' scrolling='auto' border='0' frameborder='0'></iframe>"
        }
    }, [])

    return (
        <Layout title="Live Scores">
            <BreadCrumb title="Live Scores" />
            <Advert placement="header" />
            <div className="container my-2 mx-auto text-center">
                <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_47143c_&site=1456057&ad=47143" ></iframe>
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

            <div
                ref={aiscore}
                className="my-4"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100vh'
                }}></div>
            <Advert placement="footer" />
        </Layout>
    )
}
export default LiveScore
