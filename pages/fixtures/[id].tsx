/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from '../../components/Layout'
import BreadCrumb from '../../components/BreadCrumb'
import { GetServerSideProps } from 'next'
import { http } from '../../lib/common'
import { IFixture } from '../../types'
import Link from 'next/link'
import ShareButtons from '../../components/ShareButtons'
import { BlogLayout } from '../../components/BlogLayout'
import Advert from '../../components/Advert'
import Image from 'next/image'

type Props = {
    fixture: IFixture
    errors?: object
}

const FixtureDetails = ({ fixture, errors }: Props) => {
    const date = new Date(fixture.streaming_at).toLocaleDateString('default', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })

    const time = new Date(fixture.streaming_at).toLocaleTimeString('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    const pageTitle = `${fixture.competition} - ${fixture.home_team.name} vs ${fixture.away_team.name}`

    return (
        <Layout title={pageTitle}>
            <BreadCrumb title={pageTitle}>
                <li>
                    <Link href="/fixtures">
                        <a>Fixtures</a>
                    </Link>
                </li>
            </BreadCrumb>
            <Advert placement="header" />
            
            <BlogLayout>
                <div className="part-text">
                    <a className="title">{pageTitle}</a>
                    <ul className="meta-info">
                        <li>
                            <span className="icon">
                                <i className="far fa-calendar-alt"></i>
                            </span>{' '}
                            {date}
                        </li>
                        <li>
                            <span className="icon">
                                <i className="far fa-clock"></i>
                            </span>{' '}
                            {time}
                        </li>
                    </ul>

                    <Advert placement="fixture_top" />

                    <Advert placement="fixture_top" />
                    <script data-cfasync="false" type="text/javascript" src="https://www.onclickalgo.com/a/display.php?r=5239055"></script>

                    <div className="container mx-auto text-center">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe
                                className="embed-responsive-item"
                                src={fixture.stream_source} 
                                sandbox="allow-scripts allow-same-origin"
                                id={`Fixture - ${fixture.id}`}
                                width="600"
                                height="490"
                                frameBorder="0"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                    
<script data-cfasync="false" type="text/javascript" src="https://www.onclickalgo.com/a/display.php?r=5239055"></script>

                    <Advert placement="fixture_bottom" />

                    <Advert placement="fixture_bottom" />
                    <ShareButtons />
                </div>
            </BlogLayout>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const id = params?.id

        const response = await http.get(`/api/fixtures/${id}`)
        const fixture = response.data.data

        if (!fixture) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                fixture
            }
        }
    } catch (error) {
        return {
            props: { error }
        }
    }
}

export default FixtureDetails
