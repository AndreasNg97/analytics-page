import React, { useState } from 'react'
import '../App.css'

const HorizontalNav = () => {
    const [chosen, setChosen] = useState('Signups')
    const items = ['Signups', 'Investments', 'Revenue', 'Exits', 'Trades']
    const choose = (e) => {
        setChosen(e.currentTarget.innerText)
    }

    return (
        <div className='m-sm-0 mr-5 p-sm-0 pr-4 pl-1  d-flex justify-content-between border-bottom border-secondary secondary-text'  >
            {items.map(item =>(
                <div onClick={(e) => choose(e)} className={chosen === item ? 'selected' : 'notSelected'}><p>{item}</p></div>
            ))}
            <div className='horizontal-nav-fill'></div>
        </div>
    )
}

export default HorizontalNav