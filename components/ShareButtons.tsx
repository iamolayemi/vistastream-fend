import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon
} from 'next-share'
import { useEffect, useState } from 'react'

const ShareButtons = () => {
    const [URL, setURL] = useState('')

    useEffect(() => {
        setURL(window.location.href)
    }, [])

    return (
        <div>
            <FacebookShareButton url={URL}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={URL}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={URL}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={URL}>
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default ShareButtons
