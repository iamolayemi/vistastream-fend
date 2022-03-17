import FixtureCard from './FixtureCard'

import { IFixture } from '../types'
import { useFetch } from '../lib/hooks'
import { useAppContext } from './App'
import { useEffect, useState } from 'react'
import LoadingSpinner from './Loading'

const FixtureList = () => {
    const [pageIndex, setPageIndex] = useState(0)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [pageIndex])

    const settings = useAppContext() as any

    let endpoint = '/api/fixtures'
    if (pageIndex !== 0) {
        endpoint = `/api/fixtures?page=${pageIndex}`
    }
    const { result } = useFetch(endpoint)

    if (!result) {
        return <LoadingSpinner />
    }

    const fixtures: IFixture[] = result.data

    return (
        <div className="schedule" id="today">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="section-title">
                            <h2>Upcoming Fixtures</h2>
                            <p>{settings.fixture_subtitle}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {fixtures.map((fixture) => (
                        <FixtureCard key={fixture.id} fixture={fixture} />
                    ))}
                </div>

                {fixtures.length < 1 && (
                     <div className='row justify-content-center text-center'><h4>No Fixtures at the moment, please check back later</h4></div>
                )}

                {result.meta.last_page > 1 && (
                    <div className="bettix-pagination">
                        <ul>
                            {result.meta.current_page > 1 && (
                                <li>
                                    <a
                                        onClick={() =>
                                            setPageIndex(
                                                result.meta.current_page - 1
                                            )
                                        }>
                                        <i className="fas fa-chevron-left"></i>
                                    </a>
                                </li>
                            )}

                            {result.meta.last_page !== pageIndex && (
                                <li>
                                    <a
                                        onClick={() =>
                                            setPageIndex(
                                                result.meta.current_page + 1
                                            )
                                        }>
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FixtureList
