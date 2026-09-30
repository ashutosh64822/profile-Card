const msgBtn = document.querySelector(".message-btn");
const followBtn = document.querySelector(".follow-btn");
const followCount = document.querySelectorAll(".followCount");

let count = Number(localStorage.getItem("followCount")) || 0;
let isFollowing = localStorage.getItem("isFollowing") === "true";

// Page load হলে saved state দেখাবে
if (isFollowing) {
  followBtn.innerText = "Following";
} else {
  followBtn.innerText = "Follow";
}

// Saved count দেখাবে
for (let counts of followCount) {
  counts.innerText = String(count).padStart(3, "0");
}

followBtn.addEventListener("click", function () {
  if (isFollowing === false) {
    isFollowing = true;
    count += 1;

    followBtn.innerText = "Following";
  } else {
    isFollowing = false;
    count -= 1;

    followBtn.innerText = "Follow";
  }

  // LocalStorage update
  localStorage.setItem("followCount", count);
  localStorage.setItem("isFollowing", isFollowing);

  // Count update
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

let messages = JSON.parse(localStorage.getItem("messages")) || [];

// Message display করার function
function displayMessages() {
  displayMsg.innerHTML = "";

  for (let msg of messages) {
    const div = document.createElement("div");
    div.classList.add("remove");

    div.innerHTML = `
      <p class="text">${msg}</p>
      <button class="del">Delete</button>
    `;

    displayMsg.appendChild(div);

    const delBtn = div.querySelector(".del");

    delBtn.addEventListener("click", function () {
      const index = messages.indexOf(msg);

      messages.splice(index, 1);

      localStorage.setItem("messages", JSON.stringify(messages));

      displayMessages();
    });
  }
}

// Page load হলে saved messages দেখাবে
displayMessages();

// Send message
document.querySelector("#sendMsg").addEventListener("click", function () {
  const msg = inputMsg.value.trim();

  if (msg.length === 0) {
    alert("Please enter message!");
    return;
  }

  // Array-এ message add
  messages.push(msg);

  // LocalStorage-এ save
  localStorage.setItem("messages", JSON.stringify(messages));

  // Screen-এ দেখানো
  displayMessages();

  // Input clear
  inputMsg.value = "";

  // Character count reset
  charCount.innerText = "0/100";
});

// Character counter
inputMsg.addEventListener("input", function () {
  const currentCharCount = inputMsg.value.length;

  charCount.innerText = `${currentCharCount}/100`;
});

inputMsg.addEventListener("input", function () {
  const currentCharCount = inputMsg.value.length;
  charCount.innerText = `${currentCharCount}/100`;
});

const likeBtn = document.querySelector(".likeBtn");
const likeCount = document.querySelector(".likeCount");

let lCount = Number(localStorage.getItem("likeCount")) || 0;
let isLiked = localStorage.getItem("isLiked") === "true";

// Page load হলে saved state দেখাবে
if (isLiked) {
  likeBtn.innerText = "Liked";
} else {
  likeBtn.innerText = "Like";
}

// Saved like count দেখাবে
likeCount.innerText = lCount;

likeBtn.addEventListener("click", function () {
  if (isLiked === false) {
    isLiked = true;
    lCount += 1;

    likeBtn.innerText = "Liked";
  } else {
    isLiked = false;
    lCount -= 1;

    likeBtn.innerText = "Like";
  }

  // LocalStorage update
  localStorage.setItem("likeCount", lCount);
  localStorage.setItem("isLiked", isLiked);

  // Count update
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
