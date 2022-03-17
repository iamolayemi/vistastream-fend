/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
/* @ts-nocheck */
import { useAppContext } from './App'

const Analytics = () => {
    const settings: any = useAppContext()

    console.log(settings.header_analytics_code)

    return (
        <>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-T5L73XYF13"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                        
                            gtag('config', 'G-T5L73XYF13');`
                }}
            />

            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7133507716736950" />

        </>
    )
}

export default Analytics