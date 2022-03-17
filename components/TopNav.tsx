import Link from 'next/link'
import Moment from 'react-moment'

const TopNav = () => {
    // const [clock, setClock] = useState<Date>(new Date())

    // useEffect(() => {
    //     const clockInterval = setInterval(() => setClock(new Date()), 1000)

    //     return () => {
    //         clearInterval(clockInterval)
    //     }
    // }, [])

    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                        <div className="left-area">
                            <ul>
                                <li>
                                    <span className="icon">
                                        <i className="far fa-calendar-alt"></i>
                                    </span>
                                    <span className="text">
                                        <span className="date">
                                            <Moment format="DD MMMM YYYY" />
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="far fa-clock"></i>
                                    </span>
                                    <span className="text clocks">
                                        <Moment
                                            format="hh:mm:ss A"
                                            interval={1000}
                                        />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                        <div className="right-area">
                            <ul>
                                <li>
                                    <Link href="/events">
                                        <a className="link">
                                            <span className="icon">
                                                <i className="fas fa-football-ball"></i>
                                            </span>
                                            Events
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/live">
                                        <a className="link">
                                            <span className="icon">
                                                <i className="fas fa-chart-line"></i>
                                            </span>
                                            Live Scores
                                        </a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
