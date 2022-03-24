import React from 'react'

function Loader(props) {
  console.log(props)
  return (
    <div style={{
        height: '100vh', 
        width: '100vw',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#ffd700',
        backgroundColor: '#080706'
        }}>
        Загружаю данные ⏳ ...
    </div>
  )
}

export default Loader