let button = document
  .querySelector(".BtnTitle")
  .addEventListener("click", () => {
    document
      .querySelector(".popUP_container")
      .classList.remove("popUP_Disable");
  });

let buttonClose = document
  .querySelector(".popUP_closeBtn")
  .addEventListener("click", () => {
    document.querySelector(".popUP_container").classList.add("popUP_Disable");
  });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let data = [];
  document.querySelectorAll("input").forEach((input) => {
    if (input.type == "checkbox") {
      data.push(input.checked.toString());
    } else {
      data.push(input.value.toString());
    }
  });

  if (data[0] == "") {
    alert("Введите, введите свой логин");
  } else {
    alert("Ваш логин: " + data[0]);
  }

  if (data[1] == "") {
    alert("Введите, введите свой пароль");
  } else {
    alert("Ваш пароль: " + data[1]);
  }
  if (data[2]) {
    alert("Ваш пароль: " + data[2]);
  }
});
