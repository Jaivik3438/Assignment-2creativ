import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ContactSearch from "./components/ContactSearch";
import SelectedContact from "./components/SelectedContact";
import ContactTable from "./components/ContactTable";
import contactsData from "./data/contacts.json";
import Grid from '@mui/material/Grid2';

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [filteredData, setFilteredData] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filtered = contactsData.filter((contact) =>
      Object.entries(searchCriteria).every(([key, value]) =>
        value ? contact[key]?.toLowerCase().includes(value.toLowerCase()) : true
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Choose a contact
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactSearch
            searchCriteria={searchCriteria}
            onInputChange={handleInputChange}
            onSearch={handleSearch}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SelectedContact contact={selectedContact} />
        </Grid>
      </Grid>
      <ContactTable
        data={paginatedData}
        selectedContact={selectedContact}
        onSelectContact={handleContactSelect}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default App;
