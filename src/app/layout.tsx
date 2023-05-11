import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Info-Emoji App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} scrollbar-hidden bg-gray-50`}>
        <div className='max-w-6xl mx-auto p-5 my-8 '>{children}</div>
      </body>
    </html>
  )
}
