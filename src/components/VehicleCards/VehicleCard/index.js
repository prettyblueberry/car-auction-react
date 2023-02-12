/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Fragment} from "react";

// react-router components
import {Link} from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

// eslint-disable-next-line react/prop-types
function VehicleCard({ image, title, description, vehicleInfo, action }) {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-2}>
        <MKTypography display="inline" variant="h6" fontWeight="bold">
          {title}
        </MKTypography>
        <MKTypography display="block" variant="button" color="text" fontWeight="regular" mb={0.75}>
          <Fragment key={vehicleInfo.miles}>
            {vehicleInfo.miles}
            <AddRoadIcon />
            &nbsp;&bull;&bull;
          </Fragment>
          <Fragment key={vehicleInfo.fuel}>
            {vehicleInfo.fuel}
            <LocalGasStationIcon />
            &nbsp;&bull;&nbsp;
          </Fragment>
          <Fragment key={vehicleInfo.transmission}>
            {vehicleInfo.transmission}
            <DragIndicatorIcon />
          </Fragment>
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="outlined"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the VehicleCard
VehicleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vehicleInfo: PropTypes.shape({
    miles: PropTypes.number,
    fuel: PropTypes.string,
    transmission: PropTypes.oneOf(["Manual", "Automatic"]),
  }).isRequired,
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

export default VehicleCard;
