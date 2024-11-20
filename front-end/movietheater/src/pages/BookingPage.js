import React, { useState, useContext, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Theater from "../components/Theater";

const BookingPage = () => {
  let params = useParams(null);

  let { authTokens, logoutUser } = useContext(AuthContext);

  const [booking, setBooking] = useState(null);
  const [seatTaken, setSeatTaken] = useState([]);
  const [ticket, setTicket] = useState([])
 
  const navigate = useNavigate()

  let getBooking = async (e) => {
    e.preventDefault();
    if (booking.ticket_id === null) {
      alert("Please select ticket")
    } else if (!booking.seatCode) {
      alert("Please select seat")
    } else {
      let response = await fetch(`api/movies/${params.id}/screen/${params.screenId}/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify(booking),
      });
      let data = await response.json()
      if (response.status === 200) {
        setTimeout(() => {
          navigate(`/movie/${params.id}/screen/${params.screenId}/booking/${data.id}/confirm`)
        }, 500)
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    }
  };

  let handleChange = (event) => {
    if (event.target.name === 'seatCode') {   
      if (booking == null) {
        setBooking({ seatCode: event.target.value, taken: true, ticket_id: null}); 
      } else {
        setBooking((prevBooking) => ({...prevBooking, seatCode: event.target.value, taken: true}))
      }
       
    } else if (event.target.name === 'ticket_type') {
      if (event.target.value == 15) {
        setBooking((prevBooking) => ({...prevBooking, ticket_id: 1}))
      }
      else if (event.target.value == 10) {
        setBooking((prevBooking) => ({...prevBooking, ticket_id: 2}))
      }
    }
  };

  let getScreenSeat = async () => {
    let response = await fetch(`api/movies/${params.id}/screen/${params.screenId}/getSeatsInfo`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      }
    })
    let data = await response.json();
    setSeatTaken(data)
  }

  useEffect(() => {
    getScreenSeat()
  }, [params.screenId])

  let updateTakenSeat = () => {
    let inputs = document.querySelectorAll("input[type=radio]")
    inputs.forEach(input => {
      seatTaken.forEach(spot => {
        if (input.value === spot.seatCode) {
          input.setAttribute("disabled", "")
        }
      })
    })
  }

  updateTakenSeat()

  let confirmBtn = () => {
    let inputs = document.querySelectorAll("input:checked")
    if (inputs.length === 2) {
      document.querySelector("#submit").removeAttribute("disabled")
    }
  }

  useEffect(()=> {
    confirmBtn()
  },[booking])

  let getTicket = async () => {
    let response = await fetch(`api/movies/${params.id}/screen/${params.screenId}/getTicketInfo`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      }
    })
    let data = await response.json()
    setTicket(data)
  }

  useEffect(() => {
    getTicket()
  }, [params.screenId])

  return <Theater submitHandling={getBooking} changeHandling={handleChange} ticket={ticket}/>;
};

export default BookingPage;
