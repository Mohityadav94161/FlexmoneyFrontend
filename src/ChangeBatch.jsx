import React from "react";
import { TextField, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const ChangeBatch = () => {
  return (
    <div>
      <Container className="contain" style={{ width: "40%" }}>
        <div>
          <h1>Check if you are eligible to change or Not </h1>
        </div>
        <br />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h3>Full Name</h3>
            </Grid>
            <Grid item xs={8}>
              <TextField style={{ width: "100%" }} required>
                Name
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <h3>Email</h3>
            </Grid>
            <Grid item xs={8}>
              <TextField type="email" style={{ width: "100%" }}>
                Email
              </TextField>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginLeft: "50%" }}>
          <button
            type="submit"
            style={{ height: "42px", width: "82px", marginTop: "19px" }}
          >
            {" "}
            Submit
          </button>
        </div>
      </Container>
    </div>
  );
};
export default ChangeBatch;
