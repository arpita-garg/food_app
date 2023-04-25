import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutNavbar from '../Components/LayoutNavbar'
import LayoutHome from '../Layout/LayoutHome'
import Dominos from '../Cards/Dominos'


export default function Routing() {
  return (
    <>
       <BrowserRouter>
       <LayoutNavbar></LayoutNavbar>
       <Routes>
        <Route path="/" element={<LayoutHome/>}></Route>
        <Route path="/dominos" element={<Dominos/>}></Route>
        {/* <Route path="/subway" element={<Subway/>}></Route>
        <Route path="/rollsmania" element={<RollsMania/>}></Route>
        <Route path="/baskinsrobins" element={<BaskinsRobins/>}></Route>
        <Route path="/katani" element={<Katani/>}></Route>
        <Route path="/sweets" element={<Sweets/>}></Route> */}
       </Routes>
       </BrowserRouter>
    </>
  )
}
