/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import {Link} from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DetailedFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} mb={{ xs: 6, lg: 0 }}>
            <MKTypography variant="h6" textTransform="uppercase" mb={1}>
              {brand.name}
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3} pb={1} pr={3}>
              {brand.description}
            </MKTypography>
            <MKBox display="flex" alignItems="center">
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color="secondary"
                  mr={key === socials.length - 1 ? 0 : 3}
                  sx={{ fontSize: "1.125rem" }}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }, key) => (
            <Grid key={title} item xs={6} md={2} ml={key === 0 ? { xs: 0, lg: "auro" } : 0}>
              <MKTypography
                component="h6"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        color="secondary"
                        fontWeight="regular"
                        textTransform="capitalize"
                        pb={0.5}
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        color="secondary"
                        fontWeight="regular"
                        textTransform="capitalize"
                        pb={0.5}
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} pr={3} sx={{ textAlign: "center", mb: 3 }}>
            <Divider />
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DetailedFooter
DetailedFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DetailedFooter;
