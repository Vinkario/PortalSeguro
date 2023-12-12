function addComment() {
    var usernameInput = document.getElementById("username");
    var commentTextInput = document.getElementById("comment-text");

    var username = usernameInput.value;
    var commentText = commentTextInput.value;

    if (username && commentText) {
        var commentsContainer = document.querySelector(".comments-container");

        var newComment = document.createElement("div");
        newComment.classList.add("comment");

        var usernameSpan = document.createElement("span");
        usernameSpan.classList.add("username");
        usernameSpan.textContent = username + ":";

        var commentParagraph = document.createElement("p");
        commentParagraph.textContent = commentText;

        newComment.appendChild(usernameSpan);
        newComment.appendChild(commentParagraph);

        commentsContainer.appendChild(newComment);

        // Limpar os campos após adicionar o comentário
        usernameInput.value = "";
        commentTextInput.value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }

}

var chatPopup = document.getElementById("chatPopup");
var chatInput = document.getElementById("chatInput");

// Função para alternar a visibilidade do chat
function toggleChat() {
    chatPopup.style.display = chatPopup.style.display === "none" ? "block" : "none";
}

// Função para fechar o chat
function closeChat() {
    chatPopup.style.display = "none";
}

// Função para enviar uma mensagem
function sendMessage() {
    var messageText = chatInput.value;
    if (messageText.trim() !== "") {
        var messageContainer = document.querySelector(".chat-messages-container");
        var newMessage = document.createElement("div");
        newMessage.classList.add("chat-message");
        newMessage.textContent = "Você: " + messageText;
        messageContainer.appendChild(newMessage);
        chatInput.value = ""; // Limpar o campo de entrada
    }
}
