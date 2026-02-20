import { Arimo } from 'next/font/google'
import './globals.css'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo', // optional but recommended
})

export const metadata = {
  title: 'Glasses Direct - Designer Frames & Prescription Glasses Online',
  description: 'Shop affordable designer glasses, sunglasses and prescription frames online. Free home trial, next day delivery and expert advice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimo.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
