import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { http } from '../../lib/common'
import { SWRConfig } from 'swr'
import BreadCrumb from '../../components/BreadCrumb'
import { Layout } from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import Advert from '../../components/Advert'
import Image from 'next/image'

const Articles: NextPage = ({ fallback }: any) => {
    return (
        <SWRConfig value={{ fallback }}>
            <Layout title="Latest Articles">
                <BreadCrumb title="Latest Articles" />
                <Advert placement="header" />
                <div className="container my-2 mx-auto text-center">
                <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='728' height='90' src="https://refbanners.com/I?tag=d_1456057m_47143c_&site=1456057&ad=47143" ></iframe>
                    <a
                        href="https://wa.link/081vh3"
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
                <ArticleList />
            </Layout>
        </SWRConfig>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await http.get('/api/articles')

    const articles = await response.data

    return {
        props: {
            fallback: {
                '/api/articles': articles
            }
        },
        revalidate: 60
    }
}

export default Articles
