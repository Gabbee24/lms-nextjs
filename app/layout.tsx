import {Poppins} from 'next/font/google';
import Header from './components/Header';
import './globals.css'

const poppins = Poppins({
  weight:['400','700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'CK and co',
  description: 'A learning management system for Charles Keshinro and co',
  keywords:  'web development, web design, typescript, css'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
