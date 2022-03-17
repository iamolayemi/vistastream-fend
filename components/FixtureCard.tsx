import Link from 'next/link'
import { IFixture } from '../types'
import Image from 'next/image'

interface IProps {
    fixture: IFixture
}

const FixtureCard = ({ fixture }: IProps) => {
    return (
        <div className="col-xl-6 col-lg-6">
            <div className="single-match">
                <div className="part-head">
                    <h5 className="match-title">{fixture.competition}</h5>
                </div>
                <div className="part-team">
                    <div className="single-team">
                        <div className="logo">
                            <Image
                                src={
                                    fixture.home_team.badge ||
                                    '/assets/images/team-placeholder.png'
                                }
                                alt={fixture.home_team.name}
                                width="80"
                                height="80"
                            />
                        </div>
                        <span className="team-name">
                            {fixture.home_team.name}
                        </span>
                    </div>
                    <div className="match-details">
                        <div className="match-time">
                            <span className="date">
                                {new Date(
                                    fixture.streaming_at
                                ).toLocaleDateString()}
                            </span>
                            <span className="time">
                                {new Date(
                                    fixture.streaming_at
                                ).toLocaleTimeString('default', {
                                    minute: 'numeric',
                                    hour: 'numeric'
                                })}
                            </span>
                        </div>
                        <span className="versase">vs</span>
                        <div className="buttons">
                            <Link href={`/fixtures/${fixture.id}`}>
                                <a className="buy-ticket bet-btn bet-btn-dark-light">
                                    Watch
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="single-team">
                        <div className="logo">
                            <Image
                                src={
                                    fixture.away_team.badge ||
                                    '/assets/images/team-placeholder.png'
                                }
                                alt={fixture.away_team.name}
                                width="80"
                                height="80"
                            />
                        </div>
                        <span className="team-name">
                            {fixture.away_team.name}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixtureCard
