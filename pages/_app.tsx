import type { AppProps } from 'next/app'
import { AppProvider } from '../components/App'
import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import '../styles/global.scss'

import '../styles/responsive.css'
import '../styles/nprogress.css'

import { http } from '../lib/common'
import { SWRConfig } from 'swr'

export const fetcher = (url: string) =>
    http.get(url).then((response) => response.data)

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url: string) => {
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    return (
        <SWRConfig value={{ fetcher }}>
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </SWRConfig>
    )
}

export default MyApp
