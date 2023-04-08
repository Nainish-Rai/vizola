import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Vizola',
  description: 'Making Classrooms Immersive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= 'text-white bg-black w-full  flex flex-col md:flex-row items-center justify-center '>
        <Navbar/>
        {children}</body>
    </html>
  )
}
