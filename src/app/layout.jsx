import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Emerald Betz',
    default: 'Emerald Betz - Unlock Your Winning Strategy',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased bg-neutral-950">
      <body className="flex flex-col min-h-full">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
