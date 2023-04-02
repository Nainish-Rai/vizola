import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= 'w-full flex justify-center text-white bg-black/95'>
        <Navbar/>
        {children}</body>
    </html>
  )
}
