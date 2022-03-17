import Link from 'next/link'
import { ReactNode } from 'react'

type Iprop = {
    title: string
    children?: ReactNode
}

const BreadCrumb = ({ title, children }: Iprop) => {
    return (
        <div className="breadcrumb-bettix schedule-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="breadcrumb-content">
                            <h2> {title}</h2>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                {children}
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
