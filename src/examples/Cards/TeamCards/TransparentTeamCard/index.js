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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function TransparentTeamCard({ image, name, position, description, socials }) {
  return (
    <MKBox display="flex" flexDirection="column">
      <MKBox position="relative" width="max-content">
        <MKAvatar
          variant="rounded"
          size="xxl"
          src={image}
          alt={name}
          sx={{
            borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
            position: "relative",
            zIndex: 2,
          }}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          zIndex={1}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.87)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox py={2}>
        <MKTypography variant="h5">{name}</MKTypography>
        <MKTypography variant="body2" color="text" mb={2}>
          {position}
        </MKTypography>
        <MKTypography variant="body2" color="text" mb={2}>
          {description}
        </MKTypography>
        <Stack direction="row" spacing={4} mt={3}>
          {socials}
        </Stack>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the TransparentTeamCard
TransparentTeamCard.defaultProps = {
  description: "",
  socials: "",
};

// Typechecking props for the TransparentTeamCard
TransparentTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  socials: PropTypes.node,
};

export default TransparentTeamCard;
