import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import ICU from 'i18next-icu'
import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

nextI18NextConfig?.use?.push(ICU)

nextI18NextConfig.onPreInitI18next = i18n => console.log(i18n)

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp, nextI18NextConfig)
