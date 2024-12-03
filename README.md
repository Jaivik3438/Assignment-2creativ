
# 📇 Contact Search App

Welcome to the **Contact Search App**! This React-based application allows users to search for contacts from a given JSON data set. It features multiple search filters, displays results in a table format, and allows single contact selection with data updates. This project is built using **React** and **Material-UI** for a modern, user-friendly interface. To use this application click on this link. [Contact Search App](https://jaivik3438.github.io/Assignment-2creativ) 

---

## 🚀 Project Features

- **Search Filters**: Search for contacts by:
  - First Name
  - Last Name
  - Date of Birth
  - Email Address
  - Phone Number

- **Search Results Table**: Display search results with the following details:
  - Name
  - Date of Birth
  - Address
  - City
  - State
  - Zip Code
  - Email Address
  - Phone Number

- **Pagination**: Navigate through large datasets with ease.

- **Single Contact Selection**: Select a contact from the search results, and the app will automatically update the record with that contact's data on the right side of the page.

- **User-Friendly Interface**: A clear, responsive, and modern UI using Material-UI for seamless interaction.

---

## 📋 Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)

---

## 🔧 Installation Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jaivik3438/Assignment-2creativ.git
   cd contact-search-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Run the App Locally**:
   ```bash
   npm start
   # OR
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

---

## 💡 Usage Guide

### How to Use the App

1. **Enter Search Criteria**:
   - Use the search bar to filter contacts by first name, last name, date of birth, email, or phone number.
   - Input one or more filters as needed.

2. **View Results**:
   - Search results will be displayed in a table with all relevant contact details.
   - Results are paginated to make browsing large datasets easier.

3. **Select a Contact**:
   - Click on a checkbox in the table to select individual.
   - The selected person's data will be displayed in a right side of the page as mentioned in requirements.

---

## 🖼️ Screenshots

Here are some screenshots to give you an overview of the app:

### Home Page

![Home Page Screenshot](application-screenshots/Application-dashboard.png)

### Search Results

![Search Results Screenshot](application-screenshots/Application-result.png)

---

## 📦 Technologies Used

- **React**: The core library for building the user interface.
- **Material-UI**: Provides a modern design and responsive components.
- **JavaScript**: The programming language used to build the app.

---

## ⚙️ Live Application Link 
- **Live Application**: [Contact Search App](https://jaivik3438.github.io/Assignment-2creativ) 

---

## ⚙️ Deployment on GitHub Pages

To deploy the app on GitHub Pages, follow these steps:

1. **Install `gh-pages`**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add a `homepage` property in `package.json`**:
   ```json
   "homepage": "https://yourusername.github.io/contact-search-app"
   ```

3. **Add deployment scripts in `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy the App**:
   ```bash
   npm run deploy
   ```

   Your app will be live at `https://yourusername.github.io/contact-search-app`.

---

## 🤝 Acknowledgements

- **React** and **Material-UI** for building modern web apps.
- Open-source community for providing excellent tools and libraries.

---

Thank you for using the **Contact Search App**! We hope it helps you manage and search your contacts efficiently. 🌟
