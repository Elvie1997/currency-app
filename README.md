Github Pages: https://Elvie1997.github.io/currency-app

Запросы на сервер работают с перебоями. Если не обновляется сегодняшняя дата, можно побробовать одну из ссылок ссылки в Fetch запросе - https://www.cbr-xml-daily.ru/daily_json.js или https://www.cbr-xml-daily.ru//daily_json.js'

На локальной машине поменять пути (path) на: 

 `<Routes>`  
         `<Route path='/' element={<Main date={date} getIndividualCurr={getIndividualCurr} currenciesArr={currenciesArr} light={light} />} />`    
         `<Route path='/currency-stats' element={<CurrencyStats light={light} statsObjs={statsObjs} />} />`      
`</Routes>`
