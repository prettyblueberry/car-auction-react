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

// Images
import vehicle1 from "assets/images/motors.stylemixthemes.com/01-6-255x135.jpg";

import {useEffect, useRef, useState} from "react";

// Images
import MKTypography from "../../../../components/MKTypography";
import VehicleAuctionCard from "../../../../components/VehicleCards/VehicleAuctionCard";
import VehicleCard from "../../../../components/VehicleCards/VehicleCard";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
const timeNow = Date.now();
const Places = () => {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "success",
    label: "place a bid",
  };
  const actionProps1 = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "success",
    label: "add to my cart",
  };

  const [auctionPrice, setAuctionPrice] = useState(13000);
  const [auctionPeople, setAuctionPeople] = useState(15);

  useInterval(() => {
    if (Date.now() <= timeNow + 100000) {
      setAuctionPrice(auctionPrice + 80);
      setAuctionPeople(auctionPeople + 1);
    }
  }, 1000);

  const dateStart = new Date(timeNow);

  return (
    <>
      <MKBox component="section" py={1}>
        <Container>
          <Grid
            container
            item
            xs={8}
            flexDirection="column"
            alignItems="center"
            mx="auto"
            textAlign="left"
            mb={6}
          >
            <MKTypography variant="h3" mb={1}>
              Auction
            </MKTypography>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleAuctionCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  timeData={{ timeStart: dateStart, timeDuration: 100000 }}
                  topBidPrice={auctionPrice}
                  allBidCount={auctionPeople}
                  action={actionProps}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleAuctionCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  timeData={{ timeStart: dateStart, timeDuration: 100000 }}
                  topBidPrice={auctionPrice}
                  allBidCount={auctionPeople}
                  action={actionProps}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleAuctionCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  timeData={{ timeStart: dateStart, timeDuration: 100000 }}
                  topBidPrice={auctionPrice}
                  allBidCount={auctionPeople}
                  action={actionProps}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleAuctionCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  timeData={{ timeStart: dateStart, timeDuration: 100000 }}
                  topBidPrice={auctionPrice}
                  allBidCount={auctionPeople}
                  action={actionProps}
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox component="section" py={1}>
        <Container>
          <Grid
            container
            item
            xs={8}
            flexDirection="column"
            alignItems="center"
            mx="auto"
            textAlign="left"
            mb={6}
          >
            <MKTypography variant="h4" mb={1}>
              Fixed Price
            </MKTypography>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MKBox mt={3}>
                <VehicleCard
                  image={vehicle1}
                  title="MERCEDES-BENZ"
                  vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                  action={actionProps1}
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default Places;
