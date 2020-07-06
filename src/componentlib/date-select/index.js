import React, { useState } from "react";
import {
  DateRangePicker,
  isInclusivelyBeforeDay,
  isInclusivelyAfterDay
} from "react-dates";
import moment from "moment";
import PropTypes from "prop-types";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./customStyle.scss";
import { TiArrowRightThick } from "react-icons/ti";
import { GoCalendar, GoArrowLeft, GoArrowRight } from "react-icons/go";
import { colors } from "../configs";

function DateSelect(props) {
  const {
    onChangeCallback,
    initialStartDate,
    initialEndDate,
    showOnlyPastDates,
    showOnlyFutureDays
  } = props;
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [focusedInput, setFocusedInput] = useState(null);
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onChangeCallback({ startDate, endDate });
  };

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="your_unique_start_date_id"
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={onDatesChange} // PropTypes.func.isRequired,
      focusedInput={focusedInput}
      startDatePlaceholderText="Start Date"
      endDatePlaceholderText="End Date"
      customArrowIcon={
        <TiArrowRightThick
          style={{
            margin: "0px 9px",
            color: `${colors.slate_grey}`,
            fontSize: "20px"
          }}
        >
          TO
        </TiArrowRightThick>
      }
      onFocusChange={_focusedInput => {
        setFocusedInput(_focusedInput);
      }}
      //   optional
      //   small={true}
      //   noBorder={true}
      //   block={true}
      isOutsideRange={day => {
        if (showOnlyPastDates) {
          return !isInclusivelyBeforeDay(day, moment());
        }
        if (showOnlyFutureDays) {
          return !isInclusivelyAfterDay(day, moment());
        }
      }}
      hideKeyboardShortcutsPanel={true}
      showDefaultInputIcon={true}
      displayFormat="MMM DD"
      customInputIcon={
        <GoCalendar
          style={{
            color: `${colors.slate_grey}`,
            fontSize: "20px"
          }}
        />
      }
      navPrev={
        <GoArrowLeft
          style={{
            color: `${colors.slate_grey}`,
            fontSize: "20px",
            margin: "20px"
          }}
        />
      }
      navNext={
        <GoArrowRight
          style={{
            color: `${colors.slate_grey}`,
            fontSize: "20px",
            position: "absolute",
            top: "0",
            right: "0",
            margin: "20px"
          }}
        />
      }
    />
  );
}

DateSelect.propTypes = {
  initialStartDate: PropTypes.string,
  initialEndDate: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
  showOnlyPastDates: PropTypes.bool,
  showOnlyFutureDays: PropTypes.bool
};

DateSelect.defaultProps = {
  onChangeCallback: () => {},
  initialStartDate: moment(),
  initialEndDate: null,
  showOnlyPastDates: true,
  showOnlyFutureDays: false
};

export { DateSelect };
