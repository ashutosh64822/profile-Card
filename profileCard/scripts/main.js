const followBtn = document.querySelector(".follow-btn");
const msgBtn = document.querySelector(".message-btn");
const followCount = document.querySelectorAll(".followCount");
let count = 0;
followBtn.addEventListener("click", function () {
  if (followBtn.innerText === "Follow") {
    followBtn.innerText = "Following";
    count += 1;
  } else {
    followBtn.innerText = "Follow";
    count -= 1;
  }
  for (let counts of followCount) {
    counts.innerText = count;
  }
});

const msgContainer = document.querySelector("#msgContainer");
msgBtn.addEventListener("click", function () {
  if (
    msgContainer.style.display === "none" ||
    msgContainer.style.display === ""
  ) {
    msgContainer.style.display = "block";
  } else {
    msgContainer.style.display = "none";
  }
});

const inputMsg = document.querySelector("#inputMsg");
const displayMsg = document.querySelector(".displayMsg");
document.querySelector("#sendMsg").addEventListener("click", function () {
  const msg = inputMsg.value.trim();
  const div = document.createElement("div");
  div.classList.add("remove");
  div.innerHTML = `
  <p class ="text">${msg}</p>
  <button class ="del ">Delete</button>
  `;
  if (msg.length === 0) {
    alert("please enter message!");
    return;
  }
  if (msg.length === 10) {
    alert("writing limit over");
    return;
  }
  displayMsg.appendChild(div);
  const delBtn = div.querySelector(".del");
  delBtn.addEventListener("click", function () {
    div.remove();
  });
  inputMsg.value = "";
});
