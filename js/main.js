// const elHumbergerBtn = document.querySelector(".hamburger-btn");
// const elHeader = document.querySelector(".header");
// elHumbergerBtn.addEventListener("click", function () {
//   elHeader.classList.toggle("header--adoptive");
// });
const elSendApplication = document.querySelector(".send_application");
const elFooterSendApp = document.querySelector(".footer__send-pp");
const elModal = document.querySelector(".modal");
const lesson = document.querySelector(".choose-lesson");
const more13 = document.getElementById("more13");
const more13Modal = document.querySelector(".more13-wrapper");
const more13Register = document.querySelector(".more-modal__register13");

const more34Register = document.querySelector(".more34-wrapper button");
const more34 = document.getElementById("more34");
const more34Modal = document.querySelector(".more34-wrapper");

const more45Register = document.querySelector(".more45-wrapper button");
const more45 = document.getElementById("more45");
const more45Modal = document.querySelector(".more45-wrapper");

const more57Register = document.querySelector(".more57-wrapper button");
const more57 = document.getElementById("more57");
const more57Modal = document.querySelector(".more57-wrapper");

const elCloseBtn = document.querySelector(".modal__close");

elCloseBtn.addEventListener("click", e => {
  elModal.classList.remove("modal--active");
});

more13.addEventListener("click", e => {
  if (more13Modal.classList.contains("more13--active")) {
    more13Modal.classList.remove("more13--active");
  } else {
    more13Modal.classList.add("more13--active");
  }
});

more13Register.addEventListener("click", e => {
  more13Modal.classList.remove("more13--active");
  elModal.classList.add("modal--active");
});

more13Modal.addEventListener("click", evt => {
  if (evt.target.classList.contains("more13-wrapper")) {
    more13Modal.classList.remove("more13--active");
  }
});

// more34
more34.addEventListener("click", e => {
  if (more34Modal.classList.contains("more34--active")) {
    more34Modal.classList.remove("more34--active");
  } else {
    more34Modal.classList.add("more34--active");
  }
});

more34Modal.addEventListener("click", evt => {
  if (evt.target.classList.contains("more34-wrapper")) {
    more34Modal.classList.remove("more34--active");
  }
});

more34Register.addEventListener("click", e => {
  more34Modal.classList.remove("more34--active");
  elModal.classList.add("modal--active");
});

// More45

more45.addEventListener("click", e => {
  if (more45Modal.classList.contains("more45--active")) {
    more45Modal.classList.remove("more45--active");
  } else {
    more45Modal.classList.add("more45--active");
  }
});

more45Modal.addEventListener("click", evt => {
  if (evt.target.classList.contains("more45-wrapper")) {
    more45Modal.classList.remove("more45--active");
  }
});

more45Register.addEventListener("click", e => {
  more45Modal.classList.remove("more45--active");
  elModal.classList.add("modal--active");
});

// More57

more57.addEventListener("click", e => {
  if (more57Modal.classList.contains("more57--active")) {
    more57Modal.classList.remove("more57--active");
  } else {
    more57Modal.classList.add("more57--active");
  }
});

more57Modal.addEventListener("click", evt => {
  if (evt.target.classList.contains("more57-wrapper")) {
    more57Modal.classList.remove("more57--active");
  }
});

more57Register.addEventListener("click", e => {
  more57Modal.classList.remove("more57--active");
  elModal.classList.add("modal--active");
});

//

elSendApplication.addEventListener("click", evt => {
  if (elModal.classList.contains("modal--active")) {
    elModal.classList.remove("modal--active");
  } else {
    elModal.classList.add("modal--active");
  }
});

elFooterSendApp.addEventListener("click", evt => {
  if (elModal.classList.contains("modal--active")) {
    elModal.classList.remove("modal--active");
  } else {
    elModal.classList.add("modal--active");
  }
});

elModal.addEventListener("click", evt => {
  if (evt.target.classList.contains("header__modal")) {
    elModal.classList.remove("modal--active");
  }
});

lesson.addEventListener("click", evt => {
  if (elModal.classList.contains("modal--active")) {
    elModal.classList.remove("modal--active");
  } else {
    elModal.classList.add("modal--active");
  }
});

const modalForm = document.querySelector(".header__modal-submit");

const elForm = document.querySelector(".header__modal-form");
const Name = document.querySelector(".modal__name-input");
const Age = document.getElementById("child_age");
const phoneNumber = document.querySelector(".phoneNumber");
const branch = document.querySelector(".branch");

elForm.addEventListener("submit", e => {
  e.preventDefault();
  elModal.classList.remove("modal--active");

  fetch("https://kindergardenback.herokuapp.com/ryzenapi/addInfo", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: Name.value,
      age: Age.value,
      place: branch.value,
      phoneNumber: phoneNumber.value,
    }),
  })
    .then(function (res) {})
    .catch(function (res) {});
});
