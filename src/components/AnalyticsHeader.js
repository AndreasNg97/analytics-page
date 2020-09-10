import React, { useState } from 'react'
import '../App.css'

const AnalyticsHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropDownMenu = `dropdown-menu${isOpen ? ' show' : ''}`
    return (
        <div className='py-2 d-flex align-items-center secondary-bg secondary-text page-padding primary-line'>
            <div className='mr-5 dropdown' onClick={() => setIsOpen(!isOpen)}>
                <button
                    className='btn btn-default dropdown-toggle custom-btn'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'>
                    Overview
                </button>
                <div className={dropDownMenu} aria-labelledby='dropdownMenuButton'>
                    <button className='dropdown-item' type='button'>Item 1</button>
                    <button className='dropdown-item' type='button'>Item 2</button>
                    <button className='dropdown-item' type='button'>Item 3</button>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                <div className='m-0 text-center d-sm-block'>
                    <p className='m-0'>Total signups</p>
                    <p className='m-0 color3' style={{ fontSize: '1.3rem' }}><b>648</b></p>
                </div>
                <div className='m-0 text-center d-sm-block'>
                    <p className='m-0'>Last week</p>
                    <p className='m-0 color2' style={{ fontSize: '1.3rem' }}><b>12</b></p>
                </div>
                <div className='m-0 text-center d-sm-block'>
                    <p className='m-0'>Total investments</p>
                    <p className='m-0 color1' style={{ fontSize: '1.3rem' }}><b>102</b></p>
                </div>
                <div className='m-0 text-center d-sm-block'>
                    <p className='m-0'>Average investment</p>
                    <p className='m-0 color3' style={{ fontSize: '1.3rem' }}>NOK <b>345,565</b></p>
                </div>
                <div className='m-0 text-center d-sm-block'>
                    <p className='m-0'>Total exits</p>
                    <p className='m-0 color2' style={{ fontSize: '1.3rem' }}><b>23</b></p>
                </div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default AnalyticsHeader