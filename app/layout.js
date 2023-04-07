import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Vizola',
  description: 'Making Classrooms Immersive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= 'text-white bg-black/95 w-full p-5 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto'>
        <Navbar/>
        {children}</body>
    </html>
  )
}
