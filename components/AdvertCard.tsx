import { IAdvert } from '../types'

type IProps = {
    advert: IAdvert
}

const AdvertCard = ({ advert }: IProps) => {
    return (
        <div
            className=""
            dangerouslySetInnerHTML={{ __html: advert.code }}
        />
    )
}

export default AdvertCard
