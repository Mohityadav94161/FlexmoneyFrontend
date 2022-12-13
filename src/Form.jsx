import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import yoga from "./Images/yoga.png";

export default function Form() {
  return (
    <>
      <Container
        className="contain"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          className="form"
          sx={{
            width: 700,
            height: 800,
          }}
        >
          <Box
            style={{
              width: 700,
              height: "35%",

              display: "flex-column",
              paddingTop: "69px",
              paddingLeft: "73px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h1>
                  Online Yoga Class
                  <br /> Registration for 18-65 age
                </h1>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={yoga}
                  style={{
                    width: 250,
                    // height: "30%",
                  }}
                ></img>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ display: "flex-column", justifyContent: "flex-end" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <h3>Full Name</h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  id="outlined-required"
                  label="Full Name"
                  style={{ width: "100%" }}
                >
                  Name
                </TextField>
              </Grid>

              <Grid item xs={4}>
                <h3>Email</h3>
              </Grid>
              <Grid item xs={8}>
                <TextField label="email"  required id = "Email" type="email" style={{ width: "100%" }}>
                  Email
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <h3>Phone no</h3>
              </Grid>
              <Grid item xs={8}>
                <TextField type="number" label="phone No."  required id = "phone" style={{ width: "100%" }}>
                  Phone no
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <h3>Date of Birth</h3>
              </Grid>
              <Grid item xs={8}>
                <TextField type="date" style={{ width: "100%" }}>
                  Date of Birth
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <h3>Gender</h3>
              </Grid>
              <Grid item xs={8}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <h3>Batches</h3>
              </Grid>
              <Grid item xs={8}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="6-7AM"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="7-8AM"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="8-9AM"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="5-6PM."
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <h3>Payment (500/- Rs INR) </h3>
              </Grid>
              <Grid item xs={4}>
                <TextField label="card Number"  required id = "cardNo"style={{ width: "100%" }}></TextField>
              </Grid>
              <Grid item xs={2.5}>
                <TextField label="expire date"  required id = "expDate" style={{ width: "100%" }}>cardNumber</TextField>
              </Grid>
              <Grid item xs={1.5}>
                <TextField label="CVV" required id = "CVV" type ="number" style={{ width: "100%" }}>cardNumber</TextField>
              </Grid>
              <div style={{ marginLeft: "48%", marginBottom: "19px" }}>
                <button
                  type="submit"
                  style={{ height: "42px", marginTop: "19px" }}
                >
                  {" "}
                  Register and Make payment
                </button>
              </div>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
