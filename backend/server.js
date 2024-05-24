const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // Import the fs module
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Define route handler for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// Example route for handling form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Convert form data to CSV format
    const csvData = `${formData.fullName},${formData.email},${formData.phone},${formData.course}\n`;

    // Append data to CSV file
    fs.appendFile('admission_form.csv', csvData, (err) => {
        if (err) {
            console.error('Error updating CSV:', err);
            res.status(500).send('Error updating CSV');
        } else {
            console.log('Form data saved to admission_form.csv');
            res.send('Form submitted successfully!');
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
