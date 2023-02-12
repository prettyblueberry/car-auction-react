import PropTypes from "prop-types";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VehicleCard from "../VehicleCard";
import AuctionCountdown from "./AuctionCountdown";
import MKBadge from "../../MKBadge";

function VehicleAuctionCard({
  image,
  title,
  timeData,
  topBidPrice,
  allBidCount,
  vehicleInfo,
  action,
}) {
  const { timeStart, timeDuration } = timeData;
  const timeEnd = Date.parse(timeStart) + timeDuration;
  const description = (
    <>
      <AuctionCountdown timeEnd={timeEnd} />
      <MKBadge
        badgeContent={
          <>
            <PaidIcon />
            &nbsp;{topBidPrice}
          </>
        }
        color="light"
        container
      />
      <MKBadge
        badgeContent={
          <>
            <PeopleAltIcon />
            &nbsp;{allBidCount}
          </>
        }
        color="light"
        container
      />
    </>
  );

  return (
    <VehicleCard
      image={image}
      title={title}
      description={description}
      timeData={timeData}
      vehicleInfo={vehicleInfo}
      action={action}
    />
  );
}

VehicleAuctionCard.defaultProps = {
  allBidCount: 0,
  topBidPrice: 0,
};

VehicleAuctionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vehicleInfo: PropTypes.shape({
    miles: PropTypes.number,
    fuel: PropTypes.string,
    transmission: PropTypes.oneOf(["Manual", "Automatic"]),
  }).isRequired,
  timeData: PropTypes.shape({
    timeStart: PropTypes.instanceOf(Date),
    timeDuration: PropTypes.number,
  }).isRequired,
  topBidPrice: PropTypes.number,
  allBidCount: PropTypes.number,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehicleAuctionCard;
