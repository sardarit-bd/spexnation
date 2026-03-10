import { Arimo } from 'next/font/google';
import Script from "next/script";
import './globals.css';

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo', // optional but recommended
})

export const metadata = {
  title: 'Spex Nation',
  description: 'Explore our premium collection of optical glasses crafted for clear vision, all-day comfort, and modern style. At Spex Nation, we focus on high-quality prescription glasses designed to suit everyday wear, whether you prefer clean, minimal frames or bold contemporary looks. Our men’s and women’s optical eyewear combines durable materials with precise lens fitting, giving you stylish vision correction you can trust — with sunglasses available as a complementary option.',
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
