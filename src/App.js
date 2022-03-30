import React, {useState, useEffect} from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import CurrencyStats from './pages/CurrencyStats'
import moment from "moment";
import Loader from './components/Loader/Loader';
import Switch from './components/Switch/Switch';
import Header from './components/Header/Header';



function App() {
  const [urls, setUrls] = useState([])
  const [statsObjs, setStatsObjs] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [individualCurr, setIndividualCurr] = useState(null)
  const [light, setLight] = useState(false)

  // Info for today in array format and date
  const currenciesArr = statsObjs.length && Object.keys(statsObjs[0].Valute).map(key => statsObjs[0].Valute[key])
  const date = statsObjs.length && moment(statsObjs[0].Date).format('D.MM.YYYY')
  
  // Fetch request for the previous 10 days
  const apiCall = async () => {
    let newUrls = ['https://www.cbr-xml-daily.ru//daily_json.js']
    let newObjs = []
      
    for (let i = 0; i < 10; i++) {
      await fetch(newUrls[i])
      .then(res => res.json())
      .then(data => {
          newObjs.push(data)
          setStatsObjs(newObjs)
          newUrls.push(data.PreviousURL)
          setUrls(newUrls)
          setLoading(false)
      })
      .catch(err => console.error(err))
    } 
  }

  useEffect(() => {
     apiCall()
  }, [isLoading])

  const getIndividualCurr = (id) => {
    currenciesArr.map(curr => {
      if(id === curr.ID)  {
        setIndividualCurr(curr) 
      localStorage.setItem("currency", JSON.stringify(curr))
      }
    })
  }

  const toggleTheme = () => {
    setLight(!light)
  }

  return (
    <>
      {statsObjs ?
        <>
        <Router>
          <div className={light ? 'app-light' : "app"}>
            {/* <Switch toggleTheme={toggleTheme} light={light} /> */}
            <Header toggleTheme={toggleTheme} light={light} />
            <div className='currency-wrapper'>
                <Routes>
                  <Route path='/currency-app' element={<Main date={date} getIndividualCurr={getIndividualCurr} currenciesArr={currenciesArr} light={light} />} />
                  <Route path='currency-app/currency-stats' element={<CurrencyStats light={light} statsObjs={statsObjs} />} />
              </Routes>
            </div>
          </div>
        </Router> 
        </> :
      <Loader light={light} />
      }
    </>
  );

}

export default App;
