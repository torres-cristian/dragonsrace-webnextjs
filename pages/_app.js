import '../styles/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('615613416952079') // facebookPixelId
                ReactPixel.pageView()
        
                router.events.on('routeChangeComplete', () => {
                ReactPixel.pageView()
                })
            })
    }, [router.events])

      
    return <Component {...pageProps} />
}

export default MyApp