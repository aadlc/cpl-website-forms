import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calgary Public Library',
}

export default function RootLayout(props) {
  const {children} = props
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
