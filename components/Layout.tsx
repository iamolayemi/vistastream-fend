import Header from './Header'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Meta from './Meta'

type Props = {
    children: ReactNode
    title?: string
}

export const Layout = ({
    children,
    title = 'XGoal | This is default title'
}: Props) => {
    return (
        <React.Fragment>
            <Meta title={title} />
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
