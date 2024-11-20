import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ScreeningPage = () => {
  let params = useParams(null);

  const [screens, setScreens] = useState([]);

  let getScreens = async () => {
    let response = await fetch(`api/movies/${params.id}/screen`);
    let data = await response.json();
    setScreens(data);
  };

  useEffect(() => {
    getScreens();
  }, [params.id]);

  return (
    <div>
      <h2 className="page-title">Select time</h2>
      <div className="dateTimeList">
        {screens.map((screen) => (
          <div className="screenElement">
            <Link to={`/movie/${params.id}/screen/${screen.id}`} key={screen.id}>
              <div className="screenDateTime">
                {screen.date} <br/> <strong>{screen.time}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreeningPage;
