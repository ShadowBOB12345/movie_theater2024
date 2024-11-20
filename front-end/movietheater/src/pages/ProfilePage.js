import React from 'react'
import ListTicket from '../components/ListTicket'

const ProfilePage = () => {
  return (
    <div className='ticket-list'>
        <h2 className='page-title'>All ticket</h2>
        <div className='ticket-detail'>
          <ListTicket />
        </div>
    </div>
  )
}

export default ProfilePage