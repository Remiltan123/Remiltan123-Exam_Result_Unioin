import React from 'react'
import './CSS/Result.css'
import { Routes, Route } from 'react-router-dom'
import { FindResult } from '../Component/FindResult/FindResult'
import { ForgotIndex } from '../Component/ForgotIndex/ForgotIndex'
import { ViewResult } from '../Component/ViewResult/ViewResult'

export const Result = () => {
  return (
    <div className='Result-Container'>
      <Routes>
        <Route path="/" element={<FindResult />} /> 
        <Route path="/forgot-index" element={<ForgotIndex/>} />
        <Route path='view-Result/:id' element={<ViewResult/>}/>
      </Routes>
    </div>
  )
}
