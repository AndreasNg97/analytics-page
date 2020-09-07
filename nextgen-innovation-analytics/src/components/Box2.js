import React from 'react'

const Box2 = () => {
    const meetings = [
        {
            name:'David Hansen',
            date:'02-03-2020 - 2PM',
            individual: true
        },{
            name:'Shopify',
            date:'05-03-2020 - 10:30AM',
            individual: false
        },{
            name:'Arvid, Realtree AB',
            date:'05-03-2020 - 3PM'
        }
    ]

    return (
        <div className='m-0 p-2 rounded-lg secondary-bg' style={{height:'100%'}}>
            <div className='mb-2 py-2 pl-3 pr-5 secondary-text main-bg'>
                <h4 className='mb-4'>Latest Signups</h4>
                <div className='d-flex justify-content-between'>
                    <p className='m-0'>Name</p>
                    <p className='m-0'>Scheduled Meeting</p>
                </div>
            </div>
            {meetings.map(meeting =>(
                <div className='py-2 pl-3 pr-3 d-flex justify-content-between' style={{borderBottom:'1px solid rgba(200, 200, 200, .2)'}}>
                    <p className={meeting.individual ? 'm-0 pl-2 i-meeting' : 'm-0 pl-2 c-meeting'} >{meeting.name}</p>
                    <p className='m-0 pl-4 w-50'>{meeting.date}</p>
                </div>
            ))}

        </div>
    )
}

export default Box2