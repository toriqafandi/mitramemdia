import Footer from '@/components/Footer'
import MainFrame from '@/components/MainFrame'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App(props) {
  return (
    <>
      <Navbar />
      <MainFrame {...props}/>
      <Footer />
    </>
  )
}
