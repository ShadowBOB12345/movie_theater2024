import React from "react";

const Theater = (props) => {
  let tickets = props.ticket

  return (
    <div className="theater">
      <div className="screen-wrapper">
        <div className="screen">
          <div className="screen-text">SCREEN</div>
        </div>
        </div>
      <form onSubmit={props.submitHandling} className="theaterForm">
        <ul>
          <li>
            <input
              type="radio"
              id="1A"
              name="seatCode"
              onChange={props.changeHandling}
              value="1A"
            />
            <label htmlFor="1A">1A</label>
          </li>
          <li>
            <input
              type="radio"
              id="2A"
              name="seatCode"
              onChange={props.changeHandling}
              value="2A"
            />
            <label htmlFor="2A">2A</label>
          </li>
          <li>
            <input
              type="radio"
              id="3A"
              name="seatCode"
              onChange={props.changeHandling}
              value="3A"
            />
            <label htmlFor="3A">3A</label>
          </li>
          <li>
            <input
              type="radio"
              id="4A"
              name="seatCode"
              onChange={props.changeHandling}
              value="4A"
            />
            <label htmlFor="4A">4A</label>
          </li>
          <li>
            <input
              type="radio"
              id="5A"
              name="seatCode"
              onChange={props.changeHandling}
              value="5A"
            />
            <label htmlFor="5A">5A</label>
          </li>
          <li>
            <input
              type="radio"
              id="6A"
              name="seatCode"
              onChange={props.changeHandling}
              value="6A"
            />
            <label htmlFor="6A">6A</label>
          </li>
          <li>
            <input
              type="radio"
              id="7A"
              name="seatCode"
              onChange={props.changeHandling}
              value="7A"
            />
            <label htmlFor="7A">7A</label>
          </li>
          <li>
            <input
              type="radio"
              id="8A"
              name="seatCode"
              onChange={props.changeHandling}
              value="8A"
            />
            <label htmlFor="8A">8A</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1B"
              name="seatCode"
              onChange={props.changeHandling}
              value="1B"
            />
            <label htmlFor="1B">1B</label>
          </li>
          <li>
            <input
              type="radio"
              id="2B"
              name="seatCode"
              onChange={props.changeHandling}
              value="2B"
            />
            <label htmlFor="2B">2B</label>
          </li>
          <li>
            <input
              type="radio"
              id="3B"
              name="seatCode"
              onChange={props.changeHandling}
              value="3B"
            />
            <label htmlFor="3B">3B</label>
          </li>
          <li>
            <input
              type="radio"
              id="4B"
              name="seatCode"
              onChange={props.changeHandling}
              value="4B"
            />
            <label htmlFor="4B">4B</label>
          </li>
          <li>
            <input
              type="radio"
              id="5B"
              name="seatCode"
              onChange={props.changeHandling}
              value="5B"
            />
            <label htmlFor="5B">5B</label>
          </li>
          <li>
            <input
              type="radio"
              id="6B"
              name="seatCode"
              onChange={props.changeHandling}
              value="6B"
            />
            <label htmlFor="6B">6B</label>
          </li>
          <li>
            <input
              type="radio"
              id="7B"
              name="seatCode"
              onChange={props.changeHandling}
              value="7B"
            />
            <label htmlFor="7B">7B</label>
          </li>
          <li>
            <input
              type="radio"
              id="8B"
              name="seatCode"
              onChange={props.changeHandling}
              value="8B"
            />
            <label htmlFor="8B">8B</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1C"
              name="seatCode"
              onChange={props.changeHandling}
              value="1C"
            />
            <label htmlFor="1C">1C</label>
          </li>
          <li>
            <input
              type="radio"
              id="2C"
              name="seatCode"
              onChange={props.changeHandling}
              value="2C"
            />
            <label htmlFor="2C">2C</label>
          </li>
          <li>
            <input
              type="radio"
              id="3C"
              name="seatCode"
              onChange={props.changeHandling}
              value="3C"
            />
            <label htmlFor="3C">3C</label>
          </li>
          <li>
            <input
              type="radio"
              id="4C"
              name="seatCode"
              onChange={props.changeHandling}
              value="4C"
            />
            <label htmlFor="4C">4C</label>
          </li>
          <li>
            <input
              type="radio"
              id="5C"
              name="seatCode"
              onChange={props.changeHandling}
              value="5C"
            />
            <label htmlFor="5C">5C</label>
          </li>
          <li>
            <input
              type="radio"
              id="6C"
              name="seatCode"
              onChange={props.changeHandling}
              value="6C"
            />
            <label htmlFor="6C">6C</label>
          </li>
          <li>
            <input
              type="radio"
              id="7C"
              name="seatCode"
              onChange={props.changeHandling}
              value="7C"
            />
            <label htmlFor="7C">7C</label>
          </li>
          <li>
            <input
              type="radio"
              id="8C"
              name="seatCode"
              onChange={props.changeHandling}
              value="8C"
            />
            <label htmlFor="8C">8C</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1D"
              name="seatCode"
              onChange={props.changeHandling}
              value="1D"
            />
            <label htmlFor="1D">1D</label>
          </li>
          <li>
            <input
              type="radio"
              id="2D"
              name="seatCode"
              onChange={props.changeHandling}
              value="2D"
            />
            <label htmlFor="2D">2D</label>
          </li>
          <li>
            <input
              type="radio"
              id="3D"
              name="seatCode"
              onChange={props.changeHandling}
              value="3D"
            />
            <label htmlFor="3D">3D</label>
          </li>
          <li>
            <input
              type="radio"
              id="4D"
              name="seatCode"
              onChange={props.changeHandling}
              value="4D"
            />
            <label htmlFor="4D">4D</label>
          </li>
          <li>
            <input
              type="radio"
              id="5D"
              name="seatCode"
              onChange={props.changeHandling}
              value="5D"
            />
            <label htmlFor="5D">5D</label>
          </li>
          <li>
            <input
              type="radio"
              id="6D"
              name="seatCode"
              onChange={props.changeHandling}
              value="6D"
            />
            <label htmlFor="6D">6D</label>
          </li>
          <li>
            <input
              type="radio"
              id="7D"
              name="seatCode"
              onChange={props.changeHandling}
              value="7D"
            />
            <label htmlFor="7D">7D</label>
          </li>
          <li>
            <input
              type="radio"
              id="8D"
              name="seatCode"
              onChange={props.changeHandling}
              value="8D"
            />
            <label htmlFor="8D">8D</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1E"
              name="seatCode"
              onChange={props.changeHandling}
              value="1E"
            />
            <label htmlFor="1E">1E</label>
          </li>
          <li>
            <input
              type="radio"
              id="2E"
              name="seatCode"
              onChange={props.changeHandling}
              value="2E"
            />
            <label htmlFor="2E">2E</label>
          </li>
          <li>
            <input
              type="radio"
              id="3E"
              name="seatCode"
              onChange={props.changeHandling}
              value="3E"
            />
            <label htmlFor="3E">3E</label>
          </li>
          <li>
            <input
              type="radio"
              id="4E"
              name="seatCode"
              onChange={props.changeHandling}
              value="4E"
            />
            <label htmlFor="4E">4E</label>
          </li>
          <li>
            <input
              type="radio"
              id="5E"
              name="seatCode"
              onChange={props.changeHandling}
              value="5E"
            />
            <label htmlFor="5E">5E</label>
          </li>
          <li>
            <input
              type="radio"
              id="6E"
              name="seatCode"
              onChange={props.changeHandling}
              value="6E"
            />
            <label htmlFor="6E">6E</label>
          </li>
          <li>
            <input
              type="radio"
              id="7E"
              name="seatCode"
              onChange={props.changeHandling}
              value="7E"
            />
            <label htmlFor="7E">7E</label>
          </li>
          <li>
            <input
              type="radio"
              id="8E"
              name="seatCode"
              onChange={props.changeHandling}
              value="8E"
            />
            <label htmlFor="8E">8E</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1F"
              name="seatCode"
              onChange={props.changeHandling}
              value="1F"
            />
            <label htmlFor="1F">1F</label>
          </li>
          <li>
            <input
              type="radio"
              id="2F"
              name="seatCode"
              onChange={props.changeHandling}
              value="2F"
            />
            <label htmlFor="2F">2F</label>
          </li>
          <li>
            <input
              type="radio"
              id="3F"
              name="seatCode"
              onChange={props.changeHandling}
              value="3F"
            />
            <label htmlFor="3F">3F</label>
          </li>
          <li>
            <input
              type="radio"
              id="4F"
              name="seatCode"
              onChange={props.changeHandling}
              value="4F"
            />
            <label htmlFor="4F">4F</label>
          </li>
          <li>
            <input
              type="radio"
              id="5F"
              name="seatCode"
              onChange={props.changeHandling}
              value="5F"
            />
            <label htmlFor="5F">5F</label>
          </li>
          <li>
            <input
              type="radio"
              id="6F"
              name="seatCode"
              onChange={props.changeHandling}
              value="6F"
            />
            <label htmlFor="6F">6F</label>
          </li>
          <li>
            <input
              type="radio"
              id="7F"
              name="seatCode"
              onChange={props.changeHandling}
              value="7F"
            />
            <label htmlFor="7F">7F</label>
          </li>
          <li>
            <input
              type="radio"
              id="8F"
              name="seatCode"
              onChange={props.changeHandling}
              value="8F"
            />
            <label htmlFor="8F">8F</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1G"
              name="seatCode"
              onChange={props.changeHandling}
              value="1G"
            />
            <label htmlFor="1G">1G</label>
          </li>
          <li>
            <input
              type="radio"
              id="2G"
              name="seatCode"
              onChange={props.changeHandling}
              value="2G"
            />
            <label htmlFor="2G">2G</label>
          </li>
          <li>
            <input
              type="radio"
              id="3G"
              name="seatCode"
              onChange={props.changeHandling}
              value="3G"
            />
            <label htmlFor="3G">3G</label>
          </li>
          <li>
            <input
              type="radio"
              id="4G"
              name="seatCode"
              onChange={props.changeHandling}
              value="4G"
            />
            <label htmlFor="4G">4G</label>
          </li>
          <li>
            <input
              type="radio"
              id="5G"
              name="seatCode"
              onChange={props.changeHandling}
              value="5G"
            />
            <label htmlFor="5G">5G</label>
          </li>
          <li>
            <input
              type="radio"
              id="6G"
              name="seatCode"
              onChange={props.changeHandling}
              value="6G"
            />
            <label htmlFor="6G">6G</label>
          </li>
          <li>
            <input
              type="radio"
              id="7G"
              name="seatCode"
              onChange={props.changeHandling}
              value="7G"
            />
            <label htmlFor="7G">7G</label>
          </li>
          <li>
            <input
              type="radio"
              id="8G"
              name="seatCode"
              onChange={props.changeHandling}
              value="8G"
            />
            <label htmlFor="8G">8G</label>
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              id="1H"
              name="seatCode"
              onChange={props.changeHandling}
              value="1H"
            />
            <label htmlFor="1H">1H</label>
          </li>
          <li>
            <input
              type="radio"
              id="2H"
              name="seatCode"
              onChange={props.changeHandling}
              value="2H"
            />
            <label htmlFor="2H">2H</label>
          </li>
          <li>
            <input
              type="radio"
              id="3H"
              name="seatCode"
              onChange={props.changeHandling}
              value="3H"
            />
            <label htmlFor="3H">3H</label>
          </li>
          <li>
            <input
              type="radio"
              id="4H"
              name="seatCode"
              onChange={props.changeHandling}
              value="4H"
            />
            <label htmlFor="4H">4H</label>
          </li>
          <li>
            <input
              type="radio"
              id="5H"
              name="seatCode"
              onChange={props.changeHandling}
              value="5H"
            />
            <label htmlFor="5H">5H</label>
          </li>
          <li>
            <input
              type="radio"
              id="6H"
              name="seatCode"
              onChange={props.changeHandling}
              value="6H"
            />
            <label htmlFor="6H">6H</label>
          </li>
          <li>
            <input
              type="radio"
              id="7H"
              name="seatCode"
              onChange={props.changeHandling}
              value="7H"
            />
            <label htmlFor="7H">7H</label>
          </li>
          <li>
            <input
              type="radio"
              id="8H"
              name="seatCode"
              onChange={props.changeHandling}
              value="8H"
            />
            <label htmlFor="8H">8H</label>
          </li>
        </ul>

        <br />
        <div className="tickets">
          {tickets.map(({id, ticket_type, price}) => {
              return (
                <div className="ticket">
                  <input className="ticket_type" type="radio" name="ticket_type" key={id} onChange={props.changeHandling} value={price}/>
                  <label htmlFor={id}> &nbsp; {ticket_type}: ${price}</label>
                </div>
              )
            })}
        </div>
        <br />
        <input type="submit" id="submit" className="btn btn-primary" disabled value="Next"/>
      </form>
    </div>
  );
};

export default Theater;
