import { Arimo } from 'next/font/google';
import Script from "next/script";
import './globals.css';

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


      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HXMTEK8NNZ"
        strategy="afterInteractive"
      />

      {/* Initialize */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-HXMTEK8NNZ');
        `}
      </Script>


      <body className={`${arimo.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
