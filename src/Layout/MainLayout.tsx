import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
export default function MainLayout() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
    </>
  )
}
