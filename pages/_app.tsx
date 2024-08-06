import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>EY Digital Innovations | Web & App Development</title>
                <meta name="description"
                      content="EY Web & App Development specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence (AI), videography, and drone shots. Based in Rockland County, NY."/>
                <meta name="keywords"
                      content="Elkommos Youssef Website and Application Development, web design, app development, system architecture, product engineering, portraits, event photography, product photography, artificial intelligence, videography, drone shots, Rockland, New York, New City, Hudson Valley, nj, new jersey"/>
                <meta name="author" content="EY Digital Innovations"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="EY Web & App Development"/>
                <meta property="og:description"
                      content="EY Web & App Development specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence (AI), videography, and drone shots. Based in Rockland County, NY."/>
                <meta property="og:url" content="https://elkommos.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/logo.svg"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="EY Digital Innovations | Web & App Development"/>
                <meta name="twitter:description"
                      content="EY Web & App Development specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence (AI), videography, and drone shots. Based in Rockland County, NY."/>
                <meta name="twitter:image" content="/logo.svg"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "EY Web & App Development",
                        "url": "https://elkommos.com",
                        "logo": "https://elkommos.com/logo.svg",
                        // "contactPoint": {
                        //     "@type": "ContactPoint",
                        //     "telephone": "+1-555-555-5555",
                        //     "contactType": "Customer Service"
                        // },
                        // "sameAs": [
                        //     "https://www.facebook.com/yourprofile",
                        //     "https://www.linkedin.com/in/yourprofile",
                        //     "https://www.instagram.com/yourprofile"
                        // ],
                        // "address": {
                        //     "@type": "PostalAddress",
                        //     "streetAddress": "123 Main St",
                        //     "addressLocality": "Rockland County",
                        //     "addressRegion": "NY",
                        //     "postalCode": "10901",
                        //     "addressCountry": "US"
                        // },
                        "description": "EY Digital Innovations specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence, videography, and drone shots. Based in Rockland County, NY."
                    })}
                </script>

                {/*Google tag (gtag.js)*/}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-G4LJH7RLRJ"></script>
                <GoogleAnalytics gaId="G-G4LJH7RLRJ" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
