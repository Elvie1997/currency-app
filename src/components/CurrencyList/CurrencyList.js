import React from 'react'
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import styles from './CurrencyList.scss'

function ListHeader({ date, currenciesArr, getIndividualCurr, light }) {

  const cardEl = currenciesArr && currenciesArr.map(currency => 
    <CurrencyCard 
    key={currency.ID} 
    id={currency.ID} 
    charCode={currency.CharCode} 
    value={currency.Value} 
    previous={currency.Previous}
    name={currency.Name}
    getIndividualCurr={getIndividualCurr}
    light={light}
    />)


  return (
    <>  <div className='title'>
          <h1>Курс валют</h1>
          <p> на {date}</p>
        </div>
        <div className='currency-list'>
          <ul className='list-row'>
              <li className={light ? 'list-header-top-light' : 'list-header-top'}>Код валюты</li>
              <li className={light ? 'list-header-top-light' : 'list-header-top'}>Курс в руб</li>
              <li className={light ? 'list-header-top-light' : 'list-header-top'}>Разница (1 д)</li>   
          </ul>
          {cardEl}
        </div>
        <div className={light ? 'copyright-light' : 'copyright'}>Источник: <a href="https://www.cbr-xml-daily.ru/" target="_blank">Курсы валют, API</a></div>
    </>
  )
}

export default ListHeader