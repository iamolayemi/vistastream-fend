import Advert from './Advert'
import Image from 'next/image'

const SideBar = () => {
    return (
        <div className="blog-sidebar">
            <div className="single-sidebar text-center">
                <Advert placement="sidebar" />
                <Advert placement="sidebar" />
        
              </div>
        </div>
    )
}
export default SideBar
