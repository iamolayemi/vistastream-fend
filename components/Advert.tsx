import React from 'react'
import { useFetch } from '../lib/hooks'
import { IAdvert } from '../types'
import AdvertCard from './AdvertCard'
import LoadingSpinner from './Loading'

type Iprops = {
    placement:
        | 'header'
        | 'footer'
        | 'sidebar'
        | 'post_top'
        | 'post_bottom'
        | 'event_top'
        | 'event_bottom'
}

const filterAdvert = (adverts: IAdvert[], placement: string) => {
    return adverts.filter((advert) => advert.placement === placement)
}

const Advert = ({ placement }: Iprops) => {
    const { result } = useFetch('/api/adverts')

    if (!result) {
        return <LoadingSpinner />
    }

    const adverts: IAdvert[] = result.data

    const filterd = filterAdvert(adverts, placement)

    if (filterd.length > 0) {
        const random = Math.floor(Math.random() * filterd.length)
        
        return <AdvertCard advert={filterd[random]} />
    }

    return <React.Fragment></React.Fragment>
}

export default Advert
