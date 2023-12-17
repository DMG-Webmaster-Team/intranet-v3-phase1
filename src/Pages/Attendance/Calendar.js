import React from "react";
import holidays from "./WhatsApp Image 2023-12-17 at 10.47.15 AM.jpeg";
import "../Learning-Development/Learning-Development.css";
import { Text } from "../../containers/Language";
import PagesHeader from "../../Components/Header/PagesHeader";

function Calendar() {
  return (
    <>
      <PagesHeader data={<Text tid="Calendar" />} />

      <center className=" ">
        <div className=" ">
          <img
            src={holidays}
            className="calendarImg"
            style={{}}
            alt="Mountain View Official holidays"
          />
        </div>
      </center>
    </>
  );
}

export default Calendar;
