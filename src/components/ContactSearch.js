import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';


const ContactSearch = ({ searchCriteria, onInputChange, onSearch }) => {
  return (
    <Box style={{ padding: "16px", backgroundColor: "#fff" }}>
      <Typography variant="h6" gutterBottom>
        Search for a Contact
      </Typography>
      <Grid container spacing={3}>
        {/* First Row: First Name, Last Name, Date of Birth */}
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1">First Name</Typography>
          <TextField
            name="firstName"
            value={searchCriteria.firstName}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1">Last Name</Typography>
          <TextField
            name="lastName"
            value={searchCriteria.lastName}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1">Date of Birth</Typography>
          <TextField
            name="dob"
            type="date"
            value={searchCriteria.dob}
            onChange={onInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>

        {/* Second Row: Email Address and Phone Number */}
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1">Email Address</Typography>
          <TextField
            name="email"
            value={searchCriteria.email}
            onChange={onInputChange}
            fullWidth
          />
          {/* Search Button below the Email Address */}
          <Button variant="outlined" onClick={onSearch} style={{ marginTop: "16px" }}>
            Search
          </Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1">Phone Number</Typography>
          <TextField
            name="phone"
            value={searchCriteria.phone}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSearch;
