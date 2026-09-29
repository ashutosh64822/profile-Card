const followBtn = document.querySelector(".follow-btn");
const msgBtn = document.querySelector(".message-btn");
followBtn.addEventListener("click", function () {
  if (followBtn.innerText === "Follow") {
    followBtn.innerText = "Following";
  } else {
    followBtn.innerText = "Follow";
  }
});

const msgContainer = document.querySelector("#msgContainer");
msgBtn.addEventListener("click", function () {
  msgContainer.classList.toggle("messageContainer");
});
