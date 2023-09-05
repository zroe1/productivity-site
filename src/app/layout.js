import './globals.css'
import { Inconsolata } from 'next/font/google'
import Header from './components/Header/Header'

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: "Zephaniah's Data",
  description: 'How I spend each 15 minute block of time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
