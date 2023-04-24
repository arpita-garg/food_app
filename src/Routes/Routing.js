import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutNavbar from '../Components/LayoutNavbar'
import LayoutHome from '../Layout/LayoutHome'
import Dominos from '../Cards/Dominos'
import Sweets from '../Cards/Sweets'
import Katani from '../Cards/Katani'
import RollsMania from '../Cards/RollsMania'
import Subway from '../Cards/Subway'
import BaskinsRobins from '../Cards/BaskinsRobins'

export default function Routing() {
  return (
    <>
       <BrowserRouter>
       <LayoutNavbar></LayoutNavbar>
       <Routes>
        <Route path="/" element={<LayoutHome/>}></Route>
        <Route path="/dominos" element={<Dominos/>}></Route>
        <Route path="/subway" element={<Subway/>}></Route>
        <Route path="/rollsmania" element={<RollsMania/>}></Route>
        <Route path="/baskinsrobins" element={<BaskinsRobins/>}></Route>
        <Route path="/katani" element={<Katani/>}></Route>
        <Route path="/sweets" element={<Sweets/>}></Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}
