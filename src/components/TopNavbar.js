import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/images/logo.png'
import moment from 'moment'
import Avatarx2 from '../assets/images/avatar@2x.png'

const TopNavbar = () => {
    const date = moment().format('DD-MM-YYYY')
    const [time, setTime] = useState(moment().format('h:mmA'))
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setTimeout(() => {
            setTime(moment().format('h:mmA'))
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    })

    return (
        <div className='pr-0 page-padding '>
            <Navbar expand='lg' className='m-0 p-0' variant='dark'>
                <Navbar.Brand href='/'>
                    <img
                        src={Logo}
                        width='150'
                        className='d-inline-block align-top'
                        alt='Innovasjon Norge logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <div style={{ width: '29.04%' }}></div>
                    <div className='mx-auto mb-2 p-3 d-flex d-md-flex d-lg-none justify-content-center align-items-center w-100 profile-nav-collapse '>
                        <img
                            src={Avatarx2}
                            width={65}
                        />
                        <div className='mx-5'>
                            <p className='m-0'>Elsa Andersen</p>
                        </div>
                        <div className='m-0'>
                            <p className='m-0'>{date}</p>
                            <p className='m-0'>{time}</p>
                        </div>
                    </div>
                    <Nav className='ml-5'>
                        <Nav.Link href='accounts'><p className='mx-5 my-0 secondary-text'><b>Accounts</b></p></Nav.Link>
                        <Nav.Link href='charts'><p className='mx-5 my-0 secondary-text'><b>Charts</b></p></Nav.Link>
                        <Nav.Link href='help'><p className='mx-5 my-0 secondary-text'><b>Help</b></p></Nav.Link>
                    </Nav>
                    <div className='mx-4'></div>

                </Navbar.Collapse>
                <div className='m-0 d-lg-flex d-none align-items-center profile-nav-section'>
                    <img
                        className='mr-5 position-relative'
                        style={{ right: '1.7rem' }}
                        src={Avatarx2}
                        width={55}
                        height={55}
                    />
                    <div className='mr-5'>
                        <p className='m-0'>Elsa Andersen</p>
                    </div>
                    <div className='mx-5'>
                        <p className='m-0'>{date}</p>
                        <p className='m-0'>{time}</p>
                    </div>
                </div>
            </Navbar>

        </div>
    )
}

export default TopNavbar