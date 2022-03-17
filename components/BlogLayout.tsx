import React, { ReactNode } from 'react'
import ShareButtons from './ShareButtons'
import SideBar from './SideBar'

type Props = {
    children: ReactNode
}

export const BlogLayout = ({ children }: Props) => {
    return (
        <div className="blog blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        
                        <div className="single-blog">{children}</div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
