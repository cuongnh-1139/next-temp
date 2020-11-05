import { LandingLayout } from 'components/layouts'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  function getLayout() {
    switch (router.pathname) {
      default:
        return LandingLayout
    }
  }

  const LayoutComponent = getLayout()

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}

export default MyApp