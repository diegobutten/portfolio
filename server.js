require("dotenv").config();
console.log(process.env.GROQ_API_KEY);

const express = require("express");
const cors = require("cors");
const portfolioData = require("./portfolio-data.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: `
                                You are Darrel's portfolio AI assistant.

                                Rules:
                                - Answer ONLY using portfolio data
                                - Never invent information
                                - Keep responses short (3-5 sentences max)
                                - Never output JSON
                                - Speak naturally like a chatbot

                                Portfolio Data:
                                ${JSON.stringify(portfolioData, null, 2)}
                                `
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ]
                })
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

