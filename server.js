const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Form submission received!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
