import {FunctionComponent} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomeLayout from '../Layout/Home.layout'
import Shop from '../pages/Shop.page.tsx'
import Navbar from '../components/Navbar'

const AppRoutes:FunctionComponent = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<HomeLayout/>}>
            <Route index path='/'/>
            <Route path='/shop' element={<Shop/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes