/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import Analytics from './Analytics'
import { useAppContext } from './App'


type Props = {
    title: string
}

const Meta = ({ title }: Props) => {
    const settings: any = useAppContext()

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <title>{title ?? 'VistaStream'}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={settings.description} />
            <meta name="keywords" content={settings.keywords} />
            
            <meta name="author" content="Olayemi Olatayo" />

            <Analytics />

        </Head>
    )
}

export default Meta
