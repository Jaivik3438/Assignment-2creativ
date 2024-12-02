import React from "react";
import { TextField, Typography, Box, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SelectedContact = ({ contact }) => {
  // Array of state options for the dropdown
  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
    "MA", "MI", "MN", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", 
    "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", 
    "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <Box style={{ padding: "16px", backgroundColor: "#fff" }}>
      {contact ? (
        <Box>
          {/* Address field */}
          <Typography variant="h6" gutterBottom>
            Selected Contact's Personal Information
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: "16px" }}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle1">Street address</Typography>
              <TextField
                value={contact.address}
                fullWidth
              />
            </Grid>
          </Grid>

          {/* City, State, and Zip fields in a horizontal line */}
          <Grid container spacing={1}>
            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle1">City</Typography>
              <TextField
                value={contact.city}
                fullWidth
               
              />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <Typography variant="subtitle1">State</Typography>
              <Select
                value={contact.state}
                fullWidth
               
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid size={{ xs: 3 }}>
              <Typography variant="subtitle1">Zip</Typography>
              <TextField
                value={contact.zip}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Typography>No contact selected</Typography>
      )}
    </Box>
  );
};

export default SelectedContact;
