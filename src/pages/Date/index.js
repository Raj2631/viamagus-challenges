import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Helmet } from "react-helmet";
import classes from "./index.module.scss";

const DateChallenge = () => {
  const [initialDateTime, setInitialDateTime] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [finalDate, setFinalDate] = useState();

  const onChangeHandler = (e) => {
    setDuration(e.target.value);
  };
  const calculateFinalDate = () => {
    if (duration === "") {
      return;
    }
    const initDate = new Date(initialDateTime.toJSON());
    const nextDayOfMonth = initDate.getDate() + parseInt(duration);
    initDate.setDate(nextDayOfMonth);
    setFinalDate(initDate);
  };

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Date Challenge</title>
      </Helmet>
      <h1>Date Challenge</h1>
      <div>
        <DateTimePicker
          onChange={setInitialDateTime}
          value={initialDateTime}
          format="dd-MM-y h:mm:ss a"
        />
        <h2>{initialDateTime.toDateString()}</h2>
      </div>
      <div>
        <label>Duration (in days) </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => onChangeHandler(e)}
        />
        <button onClick={calculateFinalDate}>Calculate</button>
      </div>
      {finalDate && (
        <div>
          <DateTimePicker
            onChange={() => {}}
            value={finalDate}
            format="dd-MM-y h:mm:ss a"
          />
          <h2>{finalDate.toDateString()}</h2>
        </div>
      )}
    </div>
  );
};

export default DateChallenge;
