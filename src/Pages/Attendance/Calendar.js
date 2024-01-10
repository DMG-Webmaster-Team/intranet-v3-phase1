import React from "react";
import holidays from "./24Dec_2.jpg";
import "../Learning-Development/Learning-Development.css";
import { Text } from "../../containers/Language";
import PagesHeader from "../../Components/Header/PagesHeader";

function Calendar() {
  return (
    <>
      <PagesHeader data={<Text tid="Calendar" />} />

      <center className="">
        <div className=" ">
          <img
            src={holidays}
            className="calendarImg"
            alt="Mountain View Official holidays"
          />
        </div>
      </center>
    </>
  );
}

export default Calendar;
