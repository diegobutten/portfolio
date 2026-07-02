const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typing = document.getElementById("typing");

chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden");
    chatWindow.classList.toggle("flex");
});

closeChat.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
    chatWindow.classList.remove("flex");
});

function addMessage(text, sender) {
    const wrapper = document.createElement("div");

    wrapper.className =
        sender === "user"
            ? "flex justify-end"
            : "flex";

    const bubble = document.createElement("div");

    // bubble.className =
    //     sender === "user"
    //         ? "bg-black text-white px-4 py-3 rounded-2xl max-w-[80%]"
    //         : "bg-gray-200 text-black px-4 py-3 rounded-2xl max-w-[80%]";

    bubble.className =
    sender === "user"
        ? "bg-black text-white px-4 py-3 rounded-2xl max-w-[80%] break-words whitespace-pre-wrap overflow-hidden"
        : "bg-gray-200 text-black px-4 py-3 rounded-2xl max-w-[80%] break-words whitespace-pre-wrap overflow-hidden";
    
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAIResponse(message) {
    const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    typing.classList.remove("hidden");

    try {
        const reply = await getAIResponse(message);

        typing.classList.add("hidden");
        addMessage(reply, "bot");
    } catch (error) {
        typing.classList.add("hidden");
        addMessage("Error connecting to AI.", "bot");
        console.error(error);
    }
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});