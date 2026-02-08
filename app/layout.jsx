import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Glasses Direct - Designer Frames & Prescription Glasses Online',
  description: 'Shop affordable designer glasses, sunglasses and prescription frames online. Free home trial, next day delivery and expert advice.',
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 5,
  //   userScalable: true,
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
