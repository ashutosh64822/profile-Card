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
    counts.innerText = String(count).padStart(3, "0");
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
const charCount = document.querySelector(".charCount");
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
  if (msg.length > 100) {
    alert("writing limit over");
    return;
  }
  displayMsg.appendChild(div);
  const delBtn = div.querySelector(".del");
  delBtn.addEventListener("click", function () {
    div.remove();
  });
  inputMsg.value = "";

  charCount.innerText = `0/100`;
});

inputMsg.addEventListener("input", function () {
  const currentCharCount = inputMsg.value.length;
  charCount.innerText = `${currentCharCount}/100`;
});

const likeBtn = document.querySelector(".likeBtn");
const likeCount = document.querySelector(".likeCount");
let lCount = 0;
likeBtn.addEventListener("click", function () {
  if (likeBtn.innerText === "Like") {
    likeBtn.innerText = "Liked";
    lCount += 1;
  } else {
    likeBtn.innerText = "Like";
    lCount -= 1;
  }
  likeCount.innerText = lCount;
});

const themeBtn = document.querySelector(".theme-btn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");

  themeBtn.innerText = "☀️ Light Mode";
}
// Theme button
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  // Check current theme
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.innerText = "☀️ Light Mode";

    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerText = "🌙 Dark Mode";

    localStorage.setItem("theme", "light");
  }
});
