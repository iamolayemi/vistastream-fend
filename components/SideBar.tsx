import Advert from './Advert'
import Image from 'next/image'

const SideBar = () => {
    return (
        <div className="blog-sidebar">
            <div className="single-sidebar text-center">
                <Advert placement="sidebar" />
                <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='300' height='250' src="https://refbanners.com/I?tag=d_1456057m_45031c_&site=1456057&ad=45031" ></iframe>
                <Advert placement="sidebar" />
                <iframe scrolling='no' frameBorder='0' className='iframe-ads' width='300' height='600' src="https://refbanners.com/I?tag=d_1456057m_38069c_&site=1456057&ad=38069" ></iframe>
        
              </div>
        </div>
    )
}
export default SideBar
