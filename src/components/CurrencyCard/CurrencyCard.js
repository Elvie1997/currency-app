import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './CurrencyCard.scss'


function CurrencyCard({ charCode, value, previous, name, id, getIndividualCurr, light }) {

  const [x, setX] = useState(null)
  const [y, setY] = useState(null)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

 // Calculate the 3rd column (difference)
 const difference = (curr, prev) => {
  let percent = (curr-prev) * 100 / prev;
  return percent > 0 ? 
  '+' + percent.toFixed(2) + '%' :
  percent.toFixed(2) + '%'
}

// Handle tooltip 
const handleMouseMove = (e) => {
  setX(e.clientX)
  setY(e.clientY)
}

  return (
      <ul className={light ? 'list-row currency-row-light' : 'list-row currency-row'} onMouseMove={handleMouseMove} >
        
        <li className="charcode"> 
          <Link className={light ? 'dark-text' : 'light-text'}
                id={id}
                onMouseEnter={e => setIsTooltipVisible(true)} 
                onMouseLeave={e => setIsTooltipVisible(false)}
                onClick={e => getIndividualCurr(e.target.id)}
                to='./currency-stats'
                > 
            {charCode} 
          </Link> 
        </li>

        <li> {value} </li>

        <li className={value > previous ? 'positive' : 'negative'}> {difference(value, previous)} </li>

        <span className='tooltip' 
        style={{
          top: y + 10 +'px', 
          left: x + 10 + 'px', 
          display: isTooltipVisible ? 'block' : 'none'}}
          >
        {name}
        </span>

      </ul>
      
  )
}

export default CurrencyCard