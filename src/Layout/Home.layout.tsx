import {FunctionComponent} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout:FunctionComponent = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
        <Outlet />
    </div>
    <div>
        <Footer />
    </div>
    </>
  )
}

export default HomeLayout