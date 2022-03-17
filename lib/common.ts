import axios from 'axios'

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        'Content-type': 'application/json'
    }
})

export const parseArticleDate = (date: Date) => {
    const day = new Date(date).toLocaleDateString('default', {
        day: 'numeric'
    })

    const month = new Date(date).toLocaleDateString('default', {
        month: 'short'
    })

    const year = new Date(date).toLocaleDateString('default', {
        year: 'numeric'
    })

    return { day, month, year }
}
