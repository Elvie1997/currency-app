import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";
import styles from './TenDayStats.scss'
import Loader from '../Loader/Loader';

function TenDayStats({ light, statsObjs }) {

   const currency = JSON.parse(localStorage.getItem('currency'))

   const statsEls = statsObjs.map(item => (
     <ul className='stats' >
       <li> {moment(item.Date).format('D.MM')} </li>
       <li> {item.Valute[currency.CharCode].Value} </li>
     </ul>
   ))

  return (
    <> 
     
          <h1>Динамика за последние 10 дней</h1>
          <p>Валюта: {currency.Name} ({currency.CharCode}) </p>
          <div className='stats-wrapper'>
              <ul className={`stats + ' ' + ${light ? 'stats-header-light' : 'stats-header'}`}>
                  <li>Дата</li>
                  <li>Значение</li>
              </ul>
              {statsEls}
          </div>
          <Link to='/currency-app' className={light ? 'back-light' : 'back'}>Назад</Link>
          <div className={light === true ? 'copyright-light' : 'copyright'}>Источник: <a href="https://www.cbr-xml-daily.ru/" target="_blank">Курсы валют, API</a></div>
       </>
     
  )
}

export default TenDayStats