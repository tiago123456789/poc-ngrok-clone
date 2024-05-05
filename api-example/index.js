const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use("/*", (req, res) => {
  res.json({ message: `hello world ${new Date()}`, ...req.body })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
