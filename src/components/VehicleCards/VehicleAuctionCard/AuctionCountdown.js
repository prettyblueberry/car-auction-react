import React from "react";
import Countdown from "react-countdown";
import PropTypes from "prop-types";
import MKBadge from "components/MKBadge";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

// Random component
const Completionist = () => (
  <MKBadge
    badgeContent={
      <>
        <WatchLaterIcon />
        &nbsp;Closed
      </>
    }
    color="success"
    container
  />
);

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  }
  const time = (
    <>
      <WatchLaterIcon />
      &nbsp;{String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </>
  );
  let color;
  if (minutes * 1 === 0 && hours * 1 === 0) color = "error";
  else color = `warning`;

  // Render a countdown
  return <MKBadge badgeContent={time} color={color} container />;
};

function AuctionCountdown({ timeEnd }) {
  return <Countdown date={timeEnd} renderer={renderer} />;
}

AuctionCountdown.propTypes = {
  timeEnd: PropTypes.number.isRequired,
};

export default AuctionCountdown;
