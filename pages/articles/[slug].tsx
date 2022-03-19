/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useAppContext } from '../../components/App'
import { BlogLayout } from '../../components/BlogLayout'
import BreadCrumb from '../../components/BreadCrumb'
import { Layout } from '../../components/Layout'
import ShareButtons from '../../components/ShareButtons'
import { http } from '../../lib/common'
import { IArticle } from '../../types'
import Image from 'next/image'
import Advert from '../../components/Advert'
import Moment from 'react-moment'

type Props = {
    article: IArticle
    errors?: object
}

const articleDetails = ({ article, errors }: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const settings: any = useAppContext()

    const date = new Date(article.published_at).toLocaleDateString('default', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })

    const time = new Date(article.published_at).toLocaleTimeString('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    const pageTitle = `${article.title} | ${settings.site_name}`

    return (
        <Layout title={pageTitle}>
            <BreadCrumb title={article.title.toUpperCase()}>
                <li>
                    <Link href="/articles">
                        <a>articles</a>
                    </Link>
                </li>
            </BreadCrumb>
            <Advert placement="header" />
            <div className="container my-2 mx-auto text-center">
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
    
            <BlogLayout>
                <div className="part-img">
                    {article.thumbnail && (
                        <img src={article?.thumbnail} alt="article-image" />
                    )}
                </div>
                <div className="part-text">
                    <a className="title">{article.title.toUpperCase()}</a>
                    <ul className="meta-info">
                        <li>
                            <span className="icon">
                                <i className="far fa-calendar-alt"></i>
                            </span>{' '}
                            <Moment format="DD-MM_YYY" date={article.published_at} />
                        
                        </li>
                        <li>
                            <span className="icon">
                                <i className="far fa-clock"></i>
                            </span>{' '}
                            <Moment format="hh:mm" date={article.published_at} />
                        </li>
                    </ul>
                    <Advert placement="post_top" />
                    <div className="my-2 mx-auto text-center">
                        <a
                            href="https://candytrade.net"
                            target="_blank"
                            rel="noreferrer">
                            <Image
                                className="image-fluid"
                                src="/assets/images/candy_02.JPG"
                                width="500"
                                height="400"
                                alt="candytrade"
                            />
                        </a>
                    </div>

                    <Advert placement="post_top" />

                    <div
                        className="my-2"
                        dangerouslySetInnerHTML={{ __html: article.body }}
                    />

                    <Advert placement="post_bottom" />

                    <div className="my-2 mx-auto text-center">
                        <a
                            href="https://candytrade.net"
                            target="_blank"
                            rel="noreferrer">
                            <Image
                                className="image-fluid"
                                src="/assets/images/candy_01.JPG"
                                width="500"
                                height="400"
                                alt="candytrade"
                            />
                        </a>

                    </div>

                    <Advert placement="post_bottom" />

                    <ShareButtons />
                </div>
            </BlogLayout>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const slug = params?.slug as string

        const id = slug.split('-')[0]

        const response = await http.get(`/api/articles/${id}`)
        const article: IArticle = response.data.data

        if (!article) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                article
            },
            revalidate: 60
            
        }
    } catch (error) {
        return {
            props: { error }
        }
    }
}

export default articleDetails