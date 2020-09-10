import React, { useState } from 'react'

const SortingBox = () => {
    const [box1IsOpen, setBox1IsOpen] = useState(false)
    const [box2IsOpen, setBox2IsOpen] = useState(false)
    const [gender, setGender] = useState('Female')
    const [compOrIndiv, setCompOrIndiv] = useState('Individuals')

    const dropDownMenu1 = `dropdown-menu${box1IsOpen ? ' show' : ''}`
    const dropDownMenu2 = `dropdown-menu${box2IsOpen ? ' show' : ''}`

    return (
        <div className='m-0 p-0 d-inline-flex justify-content-around align-items-center rounded-lg w-100 h-100 secondary-bg '>
            <p style={{ borderLeft: '4px solid #4effa1' }} className='m-0 pl-2'>By Gender</p>
            <div className='dropdown' onClick={() => setBox1IsOpen(!box1IsOpen)}>
                <button
                    className='btn btn-default dropdown-toggle custom-btn'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'>
                    {gender}
                </button>
                <div className={dropDownMenu1} aria-labelledby='dropdownMenuButton'>
                    <button onClick={() => setGender('Male')} className={gender === 'Male' ? 'dropdown-item disabled' : 'dropdown-item' } type='button'>Male</button>
                    <button onClick={() => setGender('Female')} className={gender === 'Female' ? 'dropdown-item disabled' : 'dropdown-item' } type='button '>Female</button>
                </div>
            </div>

            <div className='dropdown' onClick={() => setBox2IsOpen(!box2IsOpen)}>
                <button
                    className='btn btn-default dropdown-toggle custom-btn'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'>
                    {compOrIndiv}
                </button>
                <div className={dropDownMenu2} aria-labelledby='dropdownMenuButton'>
                    <button onClick={() => setCompOrIndiv('Companies')} className={compOrIndiv === 'Companies' ? 'dropdown-item disabled' : 'dropdown-item'} type='button'>Companies</button>
                    <button onClick={() => setCompOrIndiv('Individuals')} className={compOrIndiv === 'Individuals' ? 'dropdown-item disabled' : 'dropdown-item'} type='button'>Individuals</button>
                </div>
            </div>
            <p style={{ color: '#4effa1' }} className='m-0 p-0'><b>102</b></p>
        </div>
    )
}

export default SortingBox

