require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.use("/chat", require("./routes/chatbot"))
app.use("/message", require("./routes/contact"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

