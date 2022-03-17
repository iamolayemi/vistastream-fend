import { GetStaticProps, NextPage } from 'next'
import { SWRConfig } from 'swr'
import Advert from '../../components/Advert'
import BreadCrumb from '../../components/BreadCrumb'
import FixtureList from '../../components/FixtureList'
import { Layout } from '../../components/Layout'
import { http } from '../../lib/common'
import Image from 'next/image'

const Fixtures: NextPage = ({ fallback, error }: any) => {

    return (
        <SWRConfig value={{ fallback }}>
            <Layout title="Upcoming Fixtures">
                <BreadCrumb title="Upcoming Fixtures" />
                <Advert placement="header" />
                <div className="container my-2 mx-auto text-center">
                <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_47143c_&site=1456057&ad=47143" ></iframe>
            
                    <a
                        href="https://https://candytrade.net"
                        target="_blank"
                        rel="noreferrer"
                        className="text-center">
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
    const response = await http.get('/api/fixtures')

    const fixtures = await response.data

    return {
        props: {
            fallback: {
                '/api/fixtures': fixtures
            }
        }
    }
}

export default Fixtures
