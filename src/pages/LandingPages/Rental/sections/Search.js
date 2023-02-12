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
import Autocomplete from "@mui/material/Autocomplete";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
// import MKDatePicker from "components/MKDatePicker";
import MKButton from "components/MKButton";

function Search() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ pt: 2, pb: 3, px: 2, mx: "auto" }}>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              Leave From
            </MKTypography>
            <Autocomplete
              defaultValue="Bucharest"
              options={["Brazil", "Bucharest", "London", "USA"]}
              renderInput={(params) => <MKInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              To
            </MKTypography>
            <Autocomplete
              defaultValue="Italy"
              options={["Denmark", "Italy", "Poland", "Spain"]}
              renderInput={(params) => <MKInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 2 }}>
            <MKTypography display="block" variant="button" fontWeight="regular" color="text" mb={1}>
              Depart
            </MKTypography>
            <MKInput type="date" variant="standard" placeholder="Please select date" fullWidth />
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: 4 }}>
            <MKButton variant="gradient" color="info" fullWidth>
              search
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Search;
