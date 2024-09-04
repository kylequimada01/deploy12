const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define your data
const firstName = 'kyle'; // Replace with your first name
const lastName = 'quimada';   // Replace with your last name
const age = 20;           // Replace with your age
const schoolEmail = 'kylequimada@school.edu'; // Replace with your valid school email

// Route to return first name in all caps
app.get('/firstname', (req, res) => {
    res.send(firstName.toUpperCase());
});

// Route to return last name in all caps
app.get('/lastname', (req, res) => {
    res.send(lastName.toUpperCase());
});

// Route to return age
app.get('/age', (req, res) => {
    res.send(age.toString());
});

// Route to return school email
app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

// Route to return a JSON object with all the data
app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName.toUpperCase(),
        last_name: lastName.toUpperCase(),
        age: age,
        school_email: schoolEmail
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

