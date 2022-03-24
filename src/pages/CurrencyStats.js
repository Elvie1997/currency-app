import React from 'react'
import TenDayStats from '../components/TenDayStats/TenDayStats'

function CurrencyStats({ light, individualCurr, statsObjs }) {
  return (
    <>
      <TenDayStats light={light} individualCurr={individualCurr} statsObjs={statsObjs} />
    </>
  )
}

export default CurrencyStats