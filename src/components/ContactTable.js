import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Pagination,
  Box,
} from "@mui/material";

const ContactTable = ({
  data,
  selectedContact,
  onSelectContact,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contact, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={selectedContact?.email === contact.email}
                    onChange={() => onSelectContact(contact)}
                  />
                </TableCell>
                <TableCell>{`${contact.firstName} ${contact.lastName}`}</TableCell>
                <TableCell>{contact.dob}</TableCell>
                <TableCell>{contact.address}</TableCell>
                <TableCell>{contact.city}</TableCell>
                <TableCell>{contact.state}</TableCell>
                <TableCell>{contact.zip}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, page) => onPageChange(page)}
          color="primary"
        />
      </Box>
    </>
  );
};

export default ContactTable;
