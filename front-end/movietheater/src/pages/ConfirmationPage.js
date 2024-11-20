import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const ConfirmationPage = () => {

  let { authTokens } = useContext(AuthContext);

  let params = useParams(null);

  const [movie, setMovie] = useState({});
  const [screen, setScreen] = useState({});
  const [seat, setSeat] = useState({});
  const [ticket, setTicket] = useState({});

  let getBookingInfo = async () => {
    let response = await fetch(
      `api/movies/${params.id}/screen/${params.screenId}/booking/${params.bookingId}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        }
      });
    let data = await response.json();
    if (data.movie == params.id) {
      if (data.screening == params.screenId) {
        if (data.id == params.bookingId) {
          setSeat({ seatCode: data.seatCode });
          setMovie({ title: data.movie_title });
          setScreen({ date: data.screen_date, time: data.screen_time });
          let ticketResponse = await fetch(`api/ticket/${data.ticket_type}`);
          let ticketData = await ticketResponse.json();
          setTicket(ticketData);
        }
      } else {
        setScreen("Error: Screen not found");
      }
    } else {
      setMovie("Error: Movie not found");
    }
  };

  useEffect(() => {
    getBookingInfo();
  }, []);

  return (
    <div>
      <h3>Ticket Info:</h3>
      <div>Movie: {movie.title}</div>
      <div>Date: {screen.date}</div>
      <div>Time: {screen.time}</div>
      <div>Seat: {seat.seatCode}</div>
      <div>
        Ticket: {ticket.ticket_type} - ${ticket.price}
      </div>
    </div>
  );
};

export default ConfirmationPage;
