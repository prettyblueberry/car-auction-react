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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

// Material Kit 2 PRO React components
import SimpleReviewCard from "examples/Cards/ReviewCards/SimpleReviewCard";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Testimonials() {
  return (
    <MKBox position="relative" variant="gradient" bgColor="dark" mt={6} py={2} mx={-2}>
      <MKBox
        component="img"
        src={bgPattern}
        alt="background-pattern"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        opacity={0.2}
        display={{ xs: "none", md: "block" }}
      />
      <Container>
        <Grid
          container
          justifyContent="center"
          sx={{ pt: 8, pb: 5, position: "relative", zIndex: 3 }}
        >
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <MKBadge
              badgeContent="testimonials"
              variant="contained"
              color="white"
              size="sm"
              container
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h2" color="white" mb={1}>
              Some thoughts from our clients
            </MKTypography>
            <MKTypography variant="body1" color="white" fontWeight="light">
              If you&apos;re selected for them you&apos;ll also get three tickets, opportunity to
              access Investor Office Hours and Mentor Hours and much more all for free.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 10, mb: 6 }}>
          <Grid item xs={12} md={4}>
            <SimpleReviewCard
              image={team2}
              name="Olivia Harper"
              username="oliviaharper"
              review="The connections you make at Web Summit are unparalleled, we met users all over the world."
            />
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 12, md: 0 } }}>
            <SimpleReviewCard
              image={team3}
              name="Simon Lauren"
              username="simonlaurent"
              review="The networking at Web Summit is like no other European tech conference. Everything is amazing."
            />
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 12, md: 0 } }}>
            <SimpleReviewCard
              image={team4}
              name="Lucian Eurel"
              username="luciaeurel"
              review="Web Summit will increase your appetite, your inspiration, your motivation and your network."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
