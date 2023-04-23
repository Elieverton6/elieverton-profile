const alertMessageContainer = document.getElementById("alertMessage");
const discordBox = document.getElementById("discordBox");
const closeDiscordMessage = document.getElementById("closeMessage");

discordBox.addEventListener('click', function () {

    alertMessageContainer.style.display = "block";

})

closeDiscordMessage.addEventListener('click', function () {

    alertMessageContainer.style.display = "none";

})