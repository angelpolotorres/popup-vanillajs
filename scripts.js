const popup = document.querySelector(".popup-wrapper");

const messagesPopup = {
  messageOk: document.querySelector(".popup-content-ok"),
  messageWarn: document.querySelector(".popup-content-warn"),
  messageError: document.querySelector(".popup-content-error"),
};

const buttonsOpenPopup = Array.from(document.querySelectorAll(".open-popup"));
const buttonsClosePopup = Array.from(
  document.querySelectorAll(".close-popup, .close-function")
);
let buttonActivated;

const openPopup = (buttonId) => {
  popup.removeEventListener("animationend", resetAnimations);
  buttonActivated = buttonId;
  popup.classList.remove("hide");
  popup.classList.add("fade-in");
  messagesPopup[buttonId].style.display = "block";
};

const closePopup = () => {
  popup.classList.remove("fade-in");
  popup.classList.add("fade-out");
  popup.addEventListener("animationend", resetAnimations);
};

const resetAnimations = () => {
  popup.classList.remove("fade-out");
  popup.classList.add("hide");
  messagesPopup[buttonActivated].style.display = "none";
};

buttonsOpenPopup.map((button) => {
  button.addEventListener("click", () => openPopup(button.id));
});

buttonsClosePopup.map((button) => {
  button.addEventListener("click", closePopup);
});

popup.addEventListener("click", (e) => {
  if (e.target.className.includes("popup-wrapper")) closePopup();
});
