import React from 'react'
import CurrencyList from '../components/CurrencyList/CurrencyList'


function Main({ date, currenciesArr, getIndividualCurr, light }) {

  return (
    <>
      <CurrencyList 
      date={date} 
      currenciesArr={currenciesArr} 
      getIndividualCurr={getIndividualCurr} 
      light={light}
      />  
    </>
  )
}

export default Main