import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext";

const ListTicket = () => {

  let { authTokens } = useContext(AuthContext);

  const [booking, setBooking] = useState([])

  let getBookingByUser = async () => {
    let response = await fetch(`api/user/booking`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      }
    });
    let data = await response.json()
    setBooking(data)
  }

  useEffect(()=> {
    getBookingByUser()
  },[])

  return (
    <div>
      {booking.map(item => (
        <Link to={`/movie/${item.movie}/screen/${item.screening}/booking/${item.id}/confirm`} key={item.id}>
          <h6>{item.movie_title} - {item.screen_date} : {item.screen_time}</h6>
          <hr />
        </Link>
      ))}
    </div>
  )
}

export default ListTicket