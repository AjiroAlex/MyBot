const express = require('express');
const app = express();
app.use(express.json());

app.post('/ask', (req, res) => {
    const { message } = req.body;
    const responseMessage = `Your message was: ${message}`;
    res.json({ response: responseMessage });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
