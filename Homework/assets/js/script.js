// const buttons = document.querySelectorAll(".btn");

// let activeGiftItem;
// let activeBtn;
// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (activeGiftItem) {
//       activeGiftItem.style.filter = "blur(10px)";
//       activeBtn.style.opacity = "1";
//       activeBtn.removeAttribute("disabled");
//     }
//     let giftItem = document.getElementById(btn.dataset.targetId);
//     giftItem.style.filter = "none";
//     btn.style.opacity = "0";
//     btn.setAttribute("disabled", "true");
//     activeGiftItem = giftItem;
//     activeBtn = btn;
//   });
// });

// const icons = document.querySelectorAll(".fa-solid");
// const bars = document.querySelector(".fa-bars");
// const times = document.querySelector(".fa-xmark");
// const content = document.querySelector(".content");

// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     if (!content.classList.contains("active")) {
//       content.classList.add("active");
//       bars.classList.remove("active");
//       times.classList.add("active");
//     } else {
//       content.classList.remove("active");
//       bars.classList.add("active");
//       times.classList.remove("active");
//     }
//   });
// });

// const tabItems = document.querySelectorAll(".tab-item");

// let activeContent;
// tabItems.forEach((tabItem) => {
//   tabItem.addEventListener("click", () => {
//     if (activeContent) {
//       activeContent.style.display = "none";
//     }
//     let contentItem = document.getElementById(tabItem.dataset.id);
//     contentItem.style.display = "block";
//     activeContent = contentItem;
//   });
// });
