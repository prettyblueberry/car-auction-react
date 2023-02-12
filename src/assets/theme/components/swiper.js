// Material Kit 2 PRO React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white } = colors;

export default {
  ".swiper-button-prev, .swiper-button-next": {
    position: "absolute",
    top: "50%",
    padding: `0 ${pxToRem(64)}`,
    color: white.main,
    opacity: 0.5,
    transform: "translateY(-250%)",
    transition: "opacity 0.15s ease",

    "&::after": {
      fontSize: pxToRem(28),
    },

    "&:hover, &:focus": {
      opacity: 1,
    },
  },
};
