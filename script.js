const chatbotResponses = {

    "hello": "Hello! 👋 How can I help you?",

    "hi": "Hi! 👋 Nice to meet you.",

    "what is your name": "My name is SimpleBot. 🤖",

    "what is python": "Python is a high-level programming language known for its simple and readable syntax.",

    "what is html": "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.",

    "what is css": "CSS stands for Cascading Style Sheets. It is used to style and design web pages.",

    "what is javascript": "JavaScript is a programming language used to make websites interactive and dynamic.",

    "what is ai": "AI stands for Artificial Intelligence. It allows computers to perform tasks that normally require human intelligence.",

    "what is machine learning": "Machine Learning is a part of AI where computers learn patterns from data and use them to make predictions or decisions.",

    "what is a database": "A database is a system used to store, organize, and manage data.",

    "what is sql": "SQL stands for Structured Query Language. It is used to communicate with and manage relational databases.",

    "what is an api": "API stands for Application Programming Interface. It allows different software applications to communicate with each other.",

    "what is programming": "Programming is the process of writing instructions that tell a computer what to do.",

    "who created python": "Python was created by Guido van Rossum and was first released in 1991.",

    "bye": "Goodbye! 👋 Have a great day!",

    "thank you": "You're welcome! 😊"
};

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

function sendMessage() {

    const userText = userInput.value.trim();

   
    if (userText === "") {
        return;
    }

    addMessage(userText, "user");

    const response = getBotResponse(userText);

    setTimeout(function() {
        addMessage(response, "bot");
    }, 500);

    userInput.value = "";

}


function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message");

    if (sender === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function getBotResponse(userText) {

    const question = userText.toLowerCase().trim();

    if (chatbotResponses[question]) {
        return chatbotResponses[question];
    }

    for (let key in chatbotResponses) {

        if (question.includes(key)) {
            return chatbotResponses[key];
        }

    }

    return "Sorry, I don't understand that question yet. 🤔";
}