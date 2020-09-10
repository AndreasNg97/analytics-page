import React, { useState } from 'react'
import Group from '../assets/icons/group.svg'
import Funds from '../assets/icons/funds.svg'
import Path from '../assets/icons/path.svg'
import History from '../assets/icons/history.svg'
import Verify from '../assets/icons/verification-window-button.svg'
import Padlock from '../assets/icons/locked-padlock.svg'


const VerticalNav = () => {
    const [chosen, setChosen] = useState('http://localhost:3000' + Group)
    const icons = [Group, Funds, Path, History, Verify, Padlock]

    const choose = (e) => {
        setChosen(e.target.src)
        console.log(e.target.src)
        console.log(chosen)
    }
    
    return(
        <div className='d-inline-flex flex-column'>
            {icons.map((icon) =>(
                <div onClick={(e) => choose(e)} className={chosen === 'http://localhost:3000'+icon ? 'iconSelected' : 'notSelected'}>
                <div className='px-4'>
                    <img className='py-4' 
                        src={icon}
                        width={35}
                        alt='Icon'/>
                </div>
            </div>
            ))}
        </div>
    )
}

export default VerticalNav